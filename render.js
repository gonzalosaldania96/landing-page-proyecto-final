import { header } from './layouts/header.js';
import { footer } from './layouts/footer.js'

export function render (root) {
  root.innerHTML = `  
      ${header()}
      ${footer()}
      `
}
