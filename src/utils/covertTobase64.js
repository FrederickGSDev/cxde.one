import { encode } from 'js-base64'

export default function covertTobase64 ({ html, css, js }) {
  const valuesBase64 = {
    html: encode(html),
    css: encode(css),
    js: encode(js)
  }

  const hash = `#${valuesBase64.html}|${valuesBase64.css}|${valuesBase64.js}`

  const urlBase64 = hash === '#||' ? '' : hash

  return urlBase64
}
