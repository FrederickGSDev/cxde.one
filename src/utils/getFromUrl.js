import { decode } from 'js-base64'

export default function getFromUrl () {
  const base64 = deleteHashFromStart(window.location.hash)
  const [html, css, js] = base64 ? base64.split('|') : ['', '', '']
  return {
    html: decode(html),
    css: decode(css),
    js: decode(js)
  }
}

function deleteHashFromStart (string) {
  return string[0] === '#' ? string.slice(1) : string
}
