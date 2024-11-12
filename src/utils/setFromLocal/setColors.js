import { $ } from '../dom'

export function setColors (colors) {
  const root = document.documentElement

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--editor-${key}`, value)
  })

  Object.entries(colors).forEach(([key, value]) => {
    const inputContainer = $(`[data-inputcolor-id="${key}"`)
    const input = $('input', inputContainer)
    const span = $('span', inputContainer)
    if (input) input.value = value
    if (span) span.textContent = value
  })
}
