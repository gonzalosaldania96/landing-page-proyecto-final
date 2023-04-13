import './style.scss'
import { render } from './render.js'
import { scrollHeader } from './listeners/scrollHeader'

render(document.querySelector('#app'))

scrollHeader()
