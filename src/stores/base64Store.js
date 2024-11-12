import { atom } from 'nanostores'
import { debounce } from '../utils/debounce'
import { delayStore } from './delayStore'

const debounceSetUrlBase64 = debounce(setUrlBase64)

export const base64Store = atom({
  isActive: true,
  base64: ''
})

base64Store.listen((value) => {
  if (base64Store.get().isActive) {
    debounceSetUrlBase64(value.base64, delayStore.get())
  }
})

function setUrlBase64 (base64) {
  if (base64 === '') {
    window.history.replaceState(null, null, '/')
    return
  }
  window.history.replaceState(null, null, base64)
}
