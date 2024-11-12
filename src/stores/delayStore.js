import { atom } from 'nanostores'
import saveInLocal from '../utils/saveInLocal'
import { setDelay } from '../utils/setFromLocal/setDelay'

const SAVED_DELAY = Number(window.localStorage.getItem('delay')) || 200

export const delayStore = atom(SAVED_DELAY)

delayStore.listen((value) => {
  saveInLocal()
})

setDelay(SAVED_DELAY)
