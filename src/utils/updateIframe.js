import { $ } from './dom'
import { generateHtml } from './generateHtml'
import { clearConsoleStore } from '../stores/clearConsoleStore'

export function updateIframe (value) {
  // $('#iframe-preview').srcdoc = generateHtml(value)
  if (clearConsoleStore.get()) {
    console.clear()
    setTimeout(() => {
      $('#iframe-preview').srcdoc = generateHtml(value)
    }, 1)
  } else {
    $('#iframe-preview').srcdoc = generateHtml(value)
  }
}
