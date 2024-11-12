import { $ } from '../dom'
import { CSS_GRID_TEMPLATES, JS_GRID_TEMPLATES } from '../../constants/grid-templates'
import Split from 'split-grid'

let splitInstance

export function setDesign (design) {
  const grid = $('[data-design]')
  grid.style = CSS_GRID_TEMPLATES[design]
  grid.setAttribute('data-design', design)
  if (splitInstance) splitInstance.destroy()
  splitInstance = Split(JS_GRID_TEMPLATES[design])
}
