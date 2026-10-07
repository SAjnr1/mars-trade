import { supabase } from '../../supabaseClient'

export const BUCKET = 'product-images'

// The options in your dropdown have no value="..." in them, so the category is read from
// the option's text and matched to the value that is saved in the database.
const CATEGORY_BY_LABEL = {
  bag: 'bags',
  bags: 'bags',
  clothing: 'clothing',
  accessories: 'accessories',
  gifts: 'gifts',
  'home & decor': 'home-decor',
  plushies: 'plushies',
}

const LABEL_BY_CATEGORY = {
  bags: 'Bag',
  clothing: 'Clothing',
  accessories: 'Accessories',
  gifts: 'Gifts',
  'home-decor': 'Home & Decor',
  plushies: 'Plushies',
}

const keyOf = (option) => (option?.textContent || '').trim().toLowerCase()

// The category chosen in the dropdown, or '' if "Choose a category" is still selected.
export const categoryFromSelect = (select) =>
  CATEGORY_BY_LABEL[keyOf(select.selectedOptions[0])] || ''

// Which dropdown option matches a saved category (used when editing).
export const indexForCategory = (select, value) => {
  const i = [...select.options].findIndex((o) => CATEGORY_BY_LABEL[keyOf(o)] === value)
  return i === -1 ? 0 : i
}

export const categoryLabel = (value) => LABEL_BY_CATEGORY[value] || value

// Shrinks big phone photos (max 1200px, JPEG) before upload so the shop stays fast.
// If anything goes wrong it just uploads the original file.
async function prepareImage(file) {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#fff' // so transparent PNGs don't turn black
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82))
    return blob || file
  } catch {
    return file
  }
}

export async function uploadImage(file) {
  const prepared = await prepareImage(file)
  const ext = prepared === file ? file.name.split('.').pop() : 'jpg'
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, prepared, { contentType: prepared.type || undefined })
  if (error) throw error

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return { path, url: data.publicUrl }
}

// Best effort: a leftover file is a small problem, so only log if this fails.
export async function removeImage(path) {
  if (!path) return
  const { error } = await supabase.storage.from(BUCKET).remove([path])
  if (error) console.error('Could not remove image from storage:', error)
}

// Rows without image_path fall back to cutting the path out of the picture's URL.
export function pathOf(product) {
  if (product.image_path) return product.image_path
  const marker = `/${BUCKET}/`
  const index = product.image_url.indexOf(marker)
  return index === -1 ? null : product.image_url.slice(index + marker.length)
}

// "+233 55 123 4567" or "055 123 4567" -> "233551234567" (digits only, which is what a
// wa.me link needs). A number starting with a single 0 is treated as a Ghana number.
export function toDigits(value) {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2)
  else if (digits.startsWith('0')) digits = '233' + digits.slice(1)
  return digits
}

export const isValidNumber = (digits) => /^[0-9]{8,15}$/.test(digits)

// Finds the input under a label such as "Seller's Whatsapp Number".
// Your two number fields share the same id, so they are found by their label text.
export function inputByLabel(form, matches) {
  const label = [...form.querySelectorAll('.product')].find((p) =>
    matches(p.textContent.toLowerCase())
  )
  return label ? label.parentElement.querySelector('input') : null
}