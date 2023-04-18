export default function CommentUser (user) {
  const img = 'cratos.png'
  const rutaPrincipal = import.meta.url.split('/').at(2)
  const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`

  return ` <div class="comments__card">
    <div class="comments__avatar"><img src=${rutaImg} alt="Avatar"></div>
    <div class="comments__text">
      <p class="comments__name">${user.name}</p>
      <p class="comments__comment">${user.comment}</p>
    </div>
  </div>`
}
 