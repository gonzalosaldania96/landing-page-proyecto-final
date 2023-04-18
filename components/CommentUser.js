import { generateRuteImg } from '../utils'

export default function CommentUser (user) {
  const img = 'cratos.png'
  const rutaImg = generateRuteImg(img)

  return ` <div class="comments__card">
    <div class="comments__avatar"><img src=${rutaImg} alt="Avatar"></div>
    <div class="comments__text">
      <p class="comments__name">${user.name}</p>
      <p class="comments__comment">${user.comment}</p>
    </div>
  </div>`
}
