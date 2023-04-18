import CommentUser from '../components/CommentUser'
import { generateRuteImg } from '../utils'

export default function Recomendation () {
  const usuarios = [{ name: 'Lucas', comment: 'He aprendido a jugar mejor y a disfrutar más de mis juegos favoritos. El profesor es muy paciente y sabe explicar bien las estrategias y los trucos.' }, { name: 'Juan', comment: 'Antes pasaba horas y horas jugando sin parar, descuidando mi salud y mis estudios.' }, { name: 'Carlos', comment: 'Es una forma divertida y didáctica de aprender sobre los diferentes géneros, plataformas y títulos de videojuegos.' }, { name: 'Carlos', comment: 'Es una forma divertida y didáctica de aprender sobre los diferentes géneros, plataformas y títulos de videojuegos.' }]

  const img = 'paisaje.png'
  const paisajeImg = generateRuteImg(img)
  const imgSoldado = '6098048.png'
  const soldadoImg = generateRuteImg(imgSoldado)

  return ` 
  <section class="section-tab" style=${`background:url(${paisajeImg});`}> 
  <div style="height: 800px;background-color: transparent;width: 100%;position: absolute; right: 0;overflow:hidden;">
     <img style="background-size: cover; background-position: center;width: 100%; opacity: 0.15;" src=${soldadoImg} alt="img-war">
  </div>

  <div style="height: 800px;background-color: transparent;width: 100%;position: absolute; left: 0; clip-path: polygon(0 100%, 0 0%, 100% 0);">
    <img style="background-size: cover; background-position: center;width: 100%; opacity: 0.15; src=${soldadoImg} alt="">
  </div>

  <h2 class="title-comments">Comentarios</h2>
  <div class="comment-section"> 
        ${usuarios.map(user => CommentUser(user)).join('')}
      </div>   
  </section> 
  `
}
