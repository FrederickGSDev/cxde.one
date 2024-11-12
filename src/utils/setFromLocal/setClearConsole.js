import { $ } from '../dom'

export function setClearConsole (value) {
  const clearConsoleSelect = $('#clear-console')
  clearConsoleSelect.value = value
}
