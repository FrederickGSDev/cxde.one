import { codeStore } from '../stores/codeStore'
import { previewWindowStore } from '../stores/previewWindowStore'
import { generateHtml } from './generateHtml'

export function openPreviewWindow () {
  const previewWindow = previewWindowStore.get()
  if (previewWindow) {
    previewWindow.close()
  }

  const { html, css, js } = codeStore.get()
  const previewHtml = generateHtml({ html, css, js })
  const blob = new Blob([previewHtml], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const newPreviewWindow = window.open(url)

  previewWindowStore.set(newPreviewWindow)
}
