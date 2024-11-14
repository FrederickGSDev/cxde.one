import { atom } from 'nanostores'
import saveInLocal from '../utils/saveInLocal'
import { setColors } from '../utils/setFromLocal/setColors'

const SAVED_COLORS = JSON.parse(window.localStorage.getItem('colors')) || {
  'cxde-background': '#393d42',
  'cxde-text': '#c5c5c5',
  'html-background': '#1e1e1e',
  tag: '#569cd6',
  delimiters: '#808080',
  attributes: '#9cdcfe',
  'html-values': '#ce9178',
  text: '#d4d4d4',
  'html-comments': '#608b4e',
  'html-linenumbers': '#c6c6c6',
  'html-currentline': '#282828',
  'css-background': '#1e1e1e',
  properties: '#9cdcfe',
  'css-values': '#ce9178',
  'css-brackets': '#ffd700',
  'css-comments': '#608b4e',
  selectors: '#569cd6',
  units: '#b5cea8',
  'css-linenumbers': '#c6c6c6',
  'css-currentline': '#282828',
  'js-background': '#1e1e1e',
  keywords: '#569cd6',
  functions: '#d4d4d4',
  'js-strings': '#ce9178',
  numbers: '#b5cea8',
  operators: '#dcdcdc',
  'js-brackets-0': '#ffd700',
  'js-brackets-1': '#da70d6',
  'js-brackets-2': '#179fff',
  'js-comments': '#608b4e',
  'js-linenumbers': '#c6c6c6',
  'js-currentline': '#282828'
}

export const colorsStore = atom(SAVED_COLORS)

// colocar colores guardados
setColors(SAVED_COLORS)

colorsStore.listen((colors) => {
  saveInLocal()
})
