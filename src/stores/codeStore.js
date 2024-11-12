import { atom } from 'nanostores'
import { debounce } from '../utils/debounce'
import { updateIframe } from '../utils/updateIframe'
import { delayStore } from './delayStore'
import { previewWindowStore } from './previewWindowStore'
import { generateHtml } from '../utils/generateHtml'

const debounceUpdateIframe = debounce(updateIframe)

export const codeStore = atom({
  html: '',
  css: '',
  js: ''
})

codeStore.listen((value) => {
  debounceUpdateIframe(value, delayStore.get())
  debounce(() => {
    const previewWindow = previewWindowStore.get()
    if (previewWindow) {
      const previewHtml = generateHtml({ html: value.html, css: value.css, js: value.js })
      const blob = new Blob([previewHtml], { type: 'text/html' })
      previewWindow.location.href = URL.createObjectURL(blob)
    }
  }, delayStore.get())()
})
