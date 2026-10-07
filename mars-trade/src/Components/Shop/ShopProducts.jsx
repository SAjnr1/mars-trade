import { useEffect, useState } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { supabase } from '../../supabaseClient'
import './ShopProducts.css'

// The filter buttons at the top of your Shop page are matched by their text,
// and this is the category value each one stands for in the database.
const CATEGORY_BY_LABEL = {
  bag: 'bags',
  clothing: 'clothing',
  accessories: 'accessories',
  gifts: 'gifts',
  'home & decor': 'home-decor',
  plushies: 'plushies',
}

const LABEL_BY_CATEGORY = {
  bags: 'Bags',
  clothing: 'Clothing',
  accessories: 'Accessories',
  gifts: 'Gifts',
  'home-decor': 'Home & Decor',
  plushies: 'Plushies',
}

// Opens WhatsApp with a message about this exact product already typed in.
const whatsappLink = (p) => {
  const text = `Hi! I'm interested in "${p.name}" (GH¢ ${Number(p.price).toFixed(2)}). Is it still available?`
  return `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function ShopProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [filter, setFilter] = useState('') // '' means "show everything"

  async function load() {
    setLoading(true)
    setFailed(false)
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) setFailed(true)
    else setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  // ---- Make your existing filter buttons work (found by their text) ----
  useEffect(() => {
    const pills = [...document.querySelectorAll('.shop-item p')]

    const cleanups = pills.map((pill) => {
      const category = CATEGORY_BY_LABEL[pill.textContent.trim().toLowerCase()]
      if (!category) return () => {}

      // Pressing the active button again turns the filter off.
      const toggle = () => setFilter((current) => (current === category ? '' : category))
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }

      pill.dataset.category = category
      pill.classList.add('shop-pill')
      pill.setAttribute('role', 'button')
      pill.setAttribute('tabindex', '0')
      pill.setAttribute('aria-pressed', 'false')
      pill.addEventListener('click', toggle)
      pill.addEventListener('keydown', onKey)

      return () => {
        pill.removeEventListener('click', toggle)
        pill.removeEventListener('keydown', onKey)
        pill.classList.remove('shop-pill', 'shop-pill-active')
        pill.removeAttribute('role')
        pill.removeAttribute('tabindex')
        pill.removeAttribute('aria-pressed')
        delete pill.dataset.category
      }
    })

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [])

  // ---- Highlight the button that is currently selected ----
  useEffect(() => {
    document.querySelectorAll('.shop-item p[data-category]').forEach((pill) => {
      const active = pill.dataset.category === filter
      pill.classList.toggle('shop-pill-active', active)
      pill.setAttribute('aria-pressed', String(active))
    })
  }, [filter])

  const shown = filter ? products.filter((p) => p.category === filter) : products

  let status = ''
  if (loading) status = 'Loading products…'
  else if (failed) status = 'Could not load the products.'
  else if (filter) status = `Showing ${LABEL_BY_CATEGORY[filter]} (${shown.length})`
  else status = `Showing all products (${shown.length})`

  return (
    <section className="sp" aria-label="Products">
      <div className="sp-status" aria-live="polite">
        <span>{status}</span>
        {failed && (
          <button type="button" className="sp-clear" onClick={load}>Try again</button>
        )}
        {filter && !failed && (
          <button type="button" className="sp-clear" onClick={() => setFilter('')}>Show all</button>
        )}
      </div>

      {!loading && !failed && shown.length === 0 && (
        <p className="sp-empty">
          {filter ? 'Nothing in this category yet.' : 'No products have been posted yet.'}
        </p>
      )}

      <div className="sp-grid">
        {shown.map((p) => {
          const hasWhatsapp = /^[0-9]{8,15}$/.test(p.whatsapp || '')
          return (
            // The category is also the card's class (cat-bags, cat-gifts...) if you want to style it.
            <article key={p.id} className={`sp-card cat-${p.category}`} data-category={p.category} data-aos="fade-up">
              <img className="sp-img" src={p.image_url} alt={p.name} loading="lazy" />

              <div className="sp-body">
                <span className="sp-cat">{LABEL_BY_CATEGORY[p.category] || p.category}</span>
                <h3 className="sp-name">{p.name}</h3>
                <p className="sp-price">GH¢ {Number(p.price).toFixed(2)}</p>

                {(hasWhatsapp || p.phone) && (
                  <div className="sp-actions">
                    {hasWhatsapp && (
                      <a
                        className="sp-btn sp-whatsapp"
                        href={whatsappLink(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat on WhatsApp about ${p.name}`}
                      >
                        <MessageCircle size={18} aria-hidden="true" />
                        WhatsApp
                      </a>
                    )}
                    {p.phone && (
                      <a
                        className="sp-btn sp-call"
                        href={`tel:${p.phone}`}
                        aria-label={`Call about ${p.name}`}
                      >
                        <Phone size={18} aria-hidden="true" />
                        Contact
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
