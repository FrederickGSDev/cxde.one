export function debounce (func) {
  let timeoutId
  return function (...args) {
    const delay = args.pop()
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
