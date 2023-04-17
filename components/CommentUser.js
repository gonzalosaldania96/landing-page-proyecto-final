export default function CommentUser(user){
    
    const img = 'cratos.png';
    const rutaPrincipal = import.meta.url.split('/').at(2)
    const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`
   
   
    return  ` <div class="comment">
    <p class="paragraph-comment">
      ${user.comment}
    </p>
    <div class="img-desc">
      <figure> 
        <img src=${rutaImg} alt="">
      </figure>
      <div class="name-desc">
        <h3 class="name">${user.name}</h3>
      </div>
      
    </div>
    
  </div> ` 

}