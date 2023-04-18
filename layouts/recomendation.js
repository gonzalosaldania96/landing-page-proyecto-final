import CommentUser from '../components/CommentUser'

export default function recomendation () {
  const usuarios = [{ name: 'Lucas', comment: 'He aprendido a jugar mejor y a disfrutar más de mis juegos favoritos. El profesor es muy paciente y sabe explicar bien las estrategias y los trucos.' }, { name: 'Juan', comment: 'Antes pasaba horas y horas jugando sin parar, descuidando mi salud y mis estudios.' }, { name: 'Carlos', comment: 'Es una forma divertida y didáctica de aprender sobre los diferentes géneros, plataformas y títulos de videojuegos.' }, { name: 'Carlos', comment: 'Es una forma divertida y didáctica de aprender sobre los diferentes géneros, plataformas y títulos de videojuegos.' }]
 
  return ` 
  <section class="section-tab"> 
  <h2 class="title-comments">Comentarios</h2>
  <div class="comment-section">
        ${usuarios.map(user => CommentUser(user)).join('')}
      </div>   
  </section> 
  `
}
