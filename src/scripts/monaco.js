import * as monaco from 'monaco-editor'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import JsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { DEFAULT_SETTINGS } from '../constants/editor-config'
import { emmetHTML } from 'emmet-monaco-es'
import { $ } from '../utils/dom'
import { codeStore } from '../stores/codeStore'
import { setOptions } from '../utils/setFromLocal/setOptions'
import { base64Store } from '../stores/base64Store'
import covertTobase64 from '../utils/covertTobase64'
import getFromUrl from '../utils/getFromUrl'

const SAVED_OPTIONS = JSON.parse(window.localStorage.getItem('options')) || {
  fontSize: '16',
  lineNumbers: 'off',
  wordWrap: 'on',
  minimap: false
}

window.MonacoEnvironment = {
  getWorker: function (_, label) {
    if (label === 'html') {
      return new HtmlWorker()
    }
    if (label === 'css') {
      return new CssWorker()
    }
    if (label === 'javascript' || label === 'typescript') {
      return new JsWorker()
    }
  }
}

function createEditor (elementId, language) {
  const editor = monaco.editor.create(document.getElementById(elementId), {
    ...DEFAULT_SETTINGS,
    language,
    value: '',
    ariaLabel: `${language} editor`
  })

  editor.onDidFocusEditorText(() => {
    $(`#${elementId}-icon`).style.opacity = 0.2
  })

  editor.onDidBlurEditorText(() => {
    $(`#${elementId}-icon`).style.opacity = 1
  })

  editor.onDidChangeModelContent(() => {
    codeStore.set({
      ...codeStore.get(),
      [elementId]: editor.getValue()
    })
    base64Store.set({
      ...base64Store.get(),
      base64: covertTobase64(codeStore.get())
    })
  })

  return editor
}

export const htmlEditor = createEditor('html', 'html')
export const cssEditor = createEditor('css', 'css')
export const jsEditor = createEditor('js', 'javascript')

// eslint-disable-next-line no-unused-vars
const emmetHtmlInstance = emmetHTML(monaco, ['html'])

setOptions(SAVED_OPTIONS, true)

// Get code from url
const { html, css, js } = getFromUrl()

htmlEditor.setValue(html)
cssEditor.setValue(css)
jsEditor.setValue(js)
