import { htmlEditor, cssEditor, jsEditor } from '../../scripts/monaco'
import { $ } from '../dom'

export async function setOptions (value, isSaved = false) {
  await htmlEditor.updateOptions({
    ...value,
    minimap: { enabled: value.minimap }
  })
  await cssEditor.updateOptions({
    ...value,
    minimap: { enabled: value.minimap }
  })
  await jsEditor.updateOptions({
    ...value,
    minimap: { enabled: value.minimap }
  })

  if (isSaved) {
    const fontSizeSelect = $('#font-size')
    const lineNumbersSelect = $('#line-numbers')
    const wordWrapSelect = $('#word-wrap')
    const minimapSelect = $('#minimap')

    fontSizeSelect.value = value.fontSize
    lineNumbersSelect.value = value.lineNumbers
    wordWrapSelect.value = value.wordWrap
    minimapSelect.value = value.minimap ? 'on' : 'off'
  }
}
