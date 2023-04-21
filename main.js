import './style.scss'
import { render } from './render'
import { scrollHeader } from './listeners/scrollHeader'
import { heroCarrousel } from './listeners/heroCarrousel'
import { formContact } from './listeners/formContact'
import { formWizard, showTab } from './listeners/formWizard'

render(document.querySelector('#app'))

scrollHeader()
heroCarrousel()
formContact()
formWizard()

const currentTab = 0 // La pestaña actual está configurada para ser la primera pestaña (0)
showTab(currentTab) // se muestra el tab actual
