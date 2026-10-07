import { useEffect, useRef, useState } from 'react'
import { supabase } from '../../supabaseClient'
import {
  categoryFromSelect,
  categoryLabel,
  indexForCategory,
  inputByLabel,
  isValidNumber,
  pathOf,
  removeImage,
  toDigits,
  uploadImage,
} from './productHelpers'
import './AdminProductList.css'

// Switches the form's heading and button text between "post" and "edit" mode.
function applyLabels(el, editing) {
  el.title.textContent = editing ? 'Edit Product' : el.original.title
  el.buttonText.textContent = editing ? 'Update Product' : el.original.button
}

export default function AdminProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null) // the product being edited, or null
  const [deletingId, setDeletingId] = useState(null)
  const [confirmId, setConfirmId] = useState(null) // the product whose delete confirmation is open
  const [toast, setToast] = useState(null) // { text, isError }

  const els = useRef({}) // your form elements, found once
  const editingRef = useRef(null) // lets the button's click handler see the latest "editing"
  const busyRef = useRef(false)
  editingRef.current = editing

  const clearForm = () => {
    const el = els.current
    if (!el.form) return
    el.name.value = ''
    el.price.value = ''
    el.whatsapp.value = ''
    el.phone.value = ''
    el.cat.selectedIndex = 0
    el.file.value = ''
  }

  // ---- Load the products ----
  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) setToast({ text: 'Could not load products.', isError: true })
        else setProducts(data)
        setLoading(false)
      })
  }, [])

  // ---- Connect your existing form (found by its class names and ids) ----
  useEffect(() => {
    const form = document.querySelector('.admin-shop-form')
    if (!form) return

    const el = {
      form,
      title: form.querySelector('.form-header'),
      name: form.querySelector('.product-name input'),
      file: form.querySelector('.product-pic input'),
      price: form.querySelector('input[type="number"]'),
      whatsapp: inputByLabel(form, (t) => t.includes('whatsapp')),
      phone: inputByLabel(form, (t) => t.includes('phone') && !t.includes('whatsapp')),
      cat: form.querySelector('#product-cat'),
      button: form.querySelector('.product-btn'),
      buttonText: form.querySelector('.product-bttn'),
    }
    if (Object.values(el).some((x) => !x)) {
      console.error('AdminProductList: could not find all the form elements.')
      return
    }
    el.original = { title: el.title.textContent, button: el.buttonText.textContent }
    els.current = el

    const save = async () => {
      if (busyRef.current) return

      const current = editingRef.current
      const name = el.name.value.trim()
      const price = parseFloat(el.price.value)
      const category = categoryFromSelect(el.cat)
      const whatsapp = toDigits(el.whatsapp.value)
      const phone = toDigits(el.phone.value)
      const file = el.file.files[0]

      if (!name) return setToast({ text: 'Please enter the product name.', isError: true })
      if (isNaN(price) || price < 0) return setToast({ text: 'Please enter a valid price.', isError: true })
      if (!category) return setToast({ text: 'Please choose a category.', isError: true })
      if (!isValidNumber(whatsapp)) return setToast({ text: 'Please enter a valid WhatsApp number, like +233 55 123 4567.', isError: true })
      if (!isValidNumber(phone)) return setToast({ text: 'Please enter a valid phone number, like +233 55 123 4567.', isError: true })
      if (!current && !file) return setToast({ text: 'Please choose a product picture.', isError: true })

      busyRef.current = true
      el.buttonText.textContent = 'Saving…'
      el.button.style.opacity = '0.6'
      el.button.style.pointerEvents = 'none'

      let stillEditing = !!current
      let newImage = null
      try {
        if (file) newImage = await uploadImage(file)

        if (current) {
          // ----- Edit -----
          const updates = { name, price, category, whatsapp, phone: '+' + phone }
          if (newImage) {
            updates.image_url = newImage.url
            updates.image_path = newImage.path
          }
          const { data, error } = await supabase
            .from('products')
            .update(updates)
            .eq('id', current.id)
            .select()
          if (error) throw error
          // A blocked update (missing policy) comes back with no error and no rows.
          if (!data || data.length === 0) throw new Error('No rows were updated.')

          if (newImage) await removeImage(pathOf(current)) // the old picture is no longer used
          setProducts((prev) => prev.map((p) => (p.id === current.id ? data[0] : p)))
          setEditing(null)
          stillEditing = false
          setToast({ text: 'Changes saved.' })
        } else {
          // ----- Add -----
          const { data, error } = await supabase
            .from('products')
            .insert({
              name,
              price,
              category,
              whatsapp,
              phone: '+' + phone,
              image_url: newImage.url,
              image_path: newImage.path,
            })
            .select()
            .single()
          if (error) throw error

          setProducts((prev) => [data, ...prev])
          setToast({ text: 'Product posted.' })
        }
        clearForm()
      } catch (err) {
        console.error(err)
        if (newImage) await removeImage(newImage.path) // don't leave an unused picture behind
        setToast({
          text: current ? 'Could not save changes.' : 'Could not post the product.',
          isError: true,
        })
      }

      el.button.style.opacity = ''
      el.button.style.pointerEvents = ''
      applyLabels(el, stillEditing)
      busyRef.current = false
    }

    const onSubmit = (e) => e.preventDefault()
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        save()
      }
    }

    // The button is a <p> inside a <div>, so make it behave like a real button.
    el.button.setAttribute('role', 'button')
    el.button.setAttribute('tabindex', '0')
    el.button.style.cursor = 'pointer'
    el.button.addEventListener('click', save)
    el.button.addEventListener('keydown', onKey)
    form.addEventListener('submit', onSubmit)

    return () => {
      el.button.removeEventListener('click', save)
      el.button.removeEventListener('keydown', onKey)
      form.removeEventListener('submit', onSubmit)
      el.button.removeAttribute('role')
      el.button.removeAttribute('tabindex')
      el.button.style.cursor = ''
      applyLabels(el, false)
    }
  }, [])

  // ---- When "Edit" is pressed, fill your form with that product ----
  useEffect(() => {
    const el = els.current
    if (!el.form) return
    applyLabels(el, !!editing)
    if (editing) {
      el.name.value = editing.name
      el.price.value = editing.price
      el.cat.selectedIndex = indexForCategory(el.cat, editing.category)
      el.whatsapp.value = editing.whatsapp ? '+' + editing.whatsapp : ''
      el.phone.value = editing.phone || ''
      el.file.value = ''
      el.form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [editing])

  // ---- Hide the message after a few seconds ----
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  // ---- Escape closes the delete confirmation ----
  useEffect(() => {
    if (!confirmId) return
    const onKey = (e) => {
      if (e.key === 'Escape') setConfirmId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [confirmId])

  const cancelEdit = () => {
    clearForm()
    setEditing(null)
  }

  const remove = async (p) => {
    setDeletingId(p.id)

    // Delete the row first. Only if that works do we remove the picture.
    const { data, error } = await supabase.from('products').delete().eq('id', p.id).select()
    if (error || !data || data.length === 0) {
      setToast({ text: 'Could not delete that product.', isError: true })
    } else {
      await removeImage(pathOf(p))
      setProducts((prev) => prev.filter((x) => x.id !== p.id))
      if (editing && editing.id === p.id) cancelEdit()
      setToast({ text: 'Product deleted.' })
    }
    setDeletingId(null)
    setConfirmId(null)
  }

  return (
    <>
      <section className="apl">
        <h2 className="apl-title">Your Products ({products.length})</h2>

        {loading && <p className="apl-empty">Loading products…</p>}
        {!loading && products.length === 0 && <p className="apl-empty">No products posted yet.</p>}

        <ul className="apl-list">
          {products.map((p) => (
            <li
              key={p.id}
              className={`apl-row${editing && editing.id === p.id ? ' apl-row-editing' : ''}`}
            >
              <div className="apl-main">
                <img src={p.image_url} alt={p.name} />
                <div className="apl-info">
                  <strong>{p.name}</strong>
                  <span>GH¢ {Number(p.price).toFixed(2)} · {categoryLabel(p.category)}</span>
                  <span>
                    {p.whatsapp ? `WhatsApp +${p.whatsapp}` : 'No WhatsApp number yet'}
                    {p.phone ? ` · Phone ${p.phone}` : ''}
                  </span>
                </div>
                <div className="apl-actions">
                  <button type="button" className="apl-btn" onClick={() => setEditing(p)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="apl-btn apl-danger"
                    aria-expanded={confirmId === p.id}
                    onClick={() => setConfirmId(confirmId === p.id ? null : p.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* The delete confirmation drops down inside the row */}
              {confirmId === p.id && (
                <div className="apl-confirm" role="alertdialog" aria-label={`Delete ${p.name}?`}>
                  <p>Delete “{p.name}”? Its picture will be removed too, and this can’t be undone.</p>
                  <div className="apl-confirm-actions">
                    <button
                      type="button"
                      className="apl-btn"
                      onClick={() => setConfirmId(null)}
                      disabled={deletingId === p.id}
                      autoFocus
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="apl-btn apl-danger-solid"
                      onClick={() => remove(p)}
                      disabled={deletingId === p.id}
                    >
                      {deletingId === p.id ? 'Deleting…' : 'Yes, delete'}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {editing && (
        <div className="apl-editbar">
          <span>Editing “{editing.name}”. Leave the picture empty to keep the current one.</span>
          <button type="button" className="apl-btn" onClick={cancelEdit}>Cancel</button>
        </div>
      )}

      {toast && (
        <div
          className={`apl-toast${toast.isError ? ' apl-error' : ''}`}
          role={toast.isError ? 'alert' : 'status'}
        >
          {toast.text}
        </div>
      )}
    </>
  )
}