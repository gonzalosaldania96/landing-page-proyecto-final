import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'

export function render (root) {
  root.innerHTML = `  
      ${Header()}
      ${Main()}
      ${Footer()}
      `
}
