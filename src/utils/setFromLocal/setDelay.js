import { $ } from '../dom'

export function setDelay (value) {
  const delayInput = $('#delay')
  const delayNumber = $('#delay-number')
  delayInput.value = value
  delayNumber.textContent = `${value}ms`
}
