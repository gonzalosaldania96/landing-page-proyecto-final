import Header from './layouts/Header.js'
import Footer from './layouts/Footer.js'
import Main from './layouts/Main.js'

export function render (root) {
  root.innerHTML = `  
      ${Header()}
      ${Main()}
      ${Footer()}
      `
}
