import { designStore } from '../stores/designStore'
import { optionsStore } from '../stores/optionsStore'
import { clearConsoleStore } from '../stores/clearConsoleStore'
import { delayStore } from '../stores/delayStore'
import { colorsStore } from '../stores/colorsStore'
// import { autocompleteStore } from '../stores/autocompleteStore'

export default function saveInLocal () {
  window.localStorage.setItem('design', designStore.get())
  window.localStorage.setItem('options', JSON.stringify(optionsStore.get()))
  window.localStorage.setItem('clearConsole', clearConsoleStore.get())
  window.localStorage.setItem('delay', delayStore.get())
  window.localStorage.setItem('colors', JSON.stringify(colorsStore.get()))
  // window.localStorage.setItem('autocomplete', JSON.stringify(autocompleteStore.get()))
}
