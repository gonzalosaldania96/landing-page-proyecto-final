import './style.scss'
import { render } from './render.js'
import { scrollHeader } from './listeners/scrollHeader.js'
import { heroCarrousel } from './listeners/heroCarrousel.js'
import { formContact } from './listeners/formContact.js'

render(document.querySelector('#app'))

scrollHeader()
heroCarrousel()
formContact()
