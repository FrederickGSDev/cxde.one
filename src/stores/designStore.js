import { atom } from 'nanostores'
import saveInLocal from '../utils/saveInLocal'
import { setDesign } from '../utils/setFromLocal/setDesign'

const SAVED_DESIGN = window.localStorage.getItem('design') || 'grid'

export const designStore = atom('grid')

designStore.listen((value) => {
  setDesign(value)
  saveInLocal()
})

setDesign(SAVED_DESIGN)
