export default function Contact () {
  const img = 'cold-war.jpg'
  const rutaPrincipal = import.meta.url.split('/').at(2)
  const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`

  return /* html */`
   
<section class="contacto" id="contacto">

  <div class="container" style="display: flex;">
    <div class="contacto__wrapper">
      <form class="contacto__form">
        <h2 class="contacto__titulo">Contacta con Nosotros</h2>
        
        <div class="contacto__campo" style = "position: relative; height: 30px; bottom: 30px;"> 
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" >
          <div style="display: none;" id="error-mensaje">El nombre ingresado es incorrecto</div>
        </div>
        <div class="contacto__campo" style=" height: 60px; position: relative; bottom: 30px;">
          <label for="email">E-mail</label>
          <input type="text" id="email" name="email">
          <div style="display: none;" id="error-mensaje-1">El email ingresado es incorrecto</div> 
        </div>
        <div class="contacto__campo" style=" position: relative;;height: 100px; bottom: 30px;">
          <label for="mensaje">Mensaje</label>
          <textarea  id="mensaje" name="mensaje"></textarea>
          <div style="display: none;" id="error-mensaje-2">El mensaje ingresado es invalido</div> 
        </div>
        <div class="div-boton">
          <button class="contacto__boton" type="submit">Enviar</button>   
          <div style="display: none;  transition: .7s;" id="ok-form">El formulario ha sido enviado !</div>
        </div>
       
      </form>  
    </div>    

    <div class="container2">
      <img src= ${rutaImg} style="width: 450px; height: 600px;object-fit: cover; border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;box-shadow: 0 0 10px rgba(255, 255, 255, 0.996); " alt="">
    </div>
  </div>
</section>
    `
}
