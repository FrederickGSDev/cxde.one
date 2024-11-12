import { $ } from '../dom'

export function setAutocomplete (value) {
  const { enabled, model, openaiKey, hfKey } = value
  const autocomplete = $('#autocomplete')
  const modelInput = $('#model')
  const openaiKeyInput = $('#openai-key')
  const hfKeyInput = $('#hf-key')
  autocomplete.value = enabled
  modelInput.value = model
  openaiKeyInput.value = openaiKey
  hfKeyInput.value = hfKey
}
