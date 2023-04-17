export default function CommentUser(user){
    
    const img = 'cratos.png';
    const rutaPrincipal = import.meta.url.split('/').at(2)
    const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`
   
   
    return  ` <div class="comments__card">
    <div class="comments__avatar"><img src="avatar2.png" alt="Avatar"></div>
    <div class="comments__text">
      <p class="comments__name">Pedro R.</p>
      <p class="comments__comment">Muy satisfecho con mi compra. Llegó en perfectas condiciones y en el tiempo estipulado.</p>
      <div class="comments__meta">
        <span class="comments__likes">12 likes</span>
        <span class="comments__time">hace 3 horas</span>
      </div>
    </div>
  </div>`   

}