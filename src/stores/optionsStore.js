import { atom } from 'nanostores'
import saveInLocal from '../utils/saveInLocal'
import { setOptions } from '../utils/setFromLocal/setOptions'

const SAVED_OPTIONS = JSON.parse(window.localStorage.getItem('options')) || {
  fontSize: '16',
  lineNumbers: 'off',
  wordWrap: 'on',
  minimap: false
}

export const optionsStore = atom(SAVED_OPTIONS)

optionsStore.listen((value) => {
  setOptions(value)
  saveInLocal()
})
