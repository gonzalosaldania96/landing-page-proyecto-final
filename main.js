import './style.scss'
import { render } from './render'
import { scrollHeader } from './listeners/scrollHeader'
import { heroCarrousel } from './listeners/heroCarrousel'
import { formContact } from './listeners/formContact'

render(document.querySelector('#app'))

scrollHeader()
heroCarrousel()
formContact()
