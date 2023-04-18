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

  <div class="presentation" id="presentation-org" style="color: white;">
    <h2>Quienes <strong style="color: rgb(214, 237, 114);">somos</strong></h2>
    <p>Bienvenidos a nuestra empresa de asesoría de videojuegos, una empresa líder en el sector de los videojuegos. </p>

    <p> Nos enorgullece ser una de las pocas empresas en el mercado que se dedica exclusivamente a asesorar y ayudar a los desarrolladores de videojuegos a crear juegos increíbles y exitosos.</p>
    <p>En nuestra empresa, contamos con un equipo de expertos en el diseño y desarrollo de videojuegos, que han trabajado en proyectos de gran envergadura y han colaborado con algunas de las empresas más importantes de la industria. </p>
    
    </div>

  
</section>`
}
