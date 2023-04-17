import { GridImage } from '../components/GridImage'

export default function CompanyPresent () {
  const imagenes = ['battlefield.png', 'gta.png', 'batalla.png', 'play.png', 'the-last-of-us-2.png', 'the-last-of-us.png', 'juego1.png', '6098048.png']
  return /* html */`
    <section class="section-presentation-games">

  <div class="section-img">
  ${imagenes.map((imagen, i) => {
      return `<div class="grid grid${i + 1}">${GridImage(imagen)}</div>`
  }).join('')}
  </div>

  <div class="presentation" style="color: white;">
    <h2>Lorem ipsum <strong style="color: rgb(214, 237, 114);">dolor</strong> sit amet.</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi eveniet dolor excepturi natus consequatur, nulla vero aliquid obcaecati nam.</p>
  </div>

  
</section>`
}
