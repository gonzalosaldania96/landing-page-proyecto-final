import CompanyPresent from './CompanyPresent.js'
import Contact from './Contact.js'
import Hero from './Hero.js'

export default function Main () {
  return /* html */`
    <main>
        <div class="general">
          ${Hero()}
          ${CompanyPresent()}
          ${Contact()}
        </div>
    </main>
    `
}
