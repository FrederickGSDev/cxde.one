import { initVimMode } from 'monaco-vim'
import { htmlEditor, cssEditor, jsEditor } from '../scripts/monaco'
import { $ } from './dom'

const vimInstances = {
  html: null,
  css: null,
  js: null
}

export function toggleVimMode () {
  ['html', 'css', 'js'].forEach(editorType => {
    const editor = getEditor(editorType)
    const statusBar = $(`#${editorType}StatusBar`)

    if (vimInstances[editorType]) {
      disposeVimMode(editorType)
    } else {
      vimInstances[editorType] = initVimMode(editor, statusBar)
      statusBar.classList.toggle('hidden')
    }
  })
}

export function disposeVimMode (editorType) {
  const statusBar = $(`#${editorType}StatusBar`)

  if (vimInstances[editorType]) {
    vimInstances[editorType].dispose()
    vimInstances[editorType] = null
  }
  statusBar.classList.toggle('hidden')
}

function getEditor (editorType) {
  switch (editorType) {
    case 'html':
      return htmlEditor
    case 'css':
      return cssEditor
    case 'js':
      return jsEditor
    default:
      throw new Error(`Unknown editor type: ${editorType}`)
  }
}
