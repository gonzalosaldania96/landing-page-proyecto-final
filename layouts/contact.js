export default function Contact () {
  return /* html */`
  <section class="contacto">
  <div class="container">
    <div class="contacto__wrapper">
      <form class="contacto__form">
        <h2 class="contacto__titulo">Contacta con Nosotros</h2>
        
        <div class="contacto__campo">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required>
        </div>
        <div class="contacto__campo">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="contacto__campo">
          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
        </div>
        <button class="contacto__boton" type="submit">Enviar</button>
      </form>
    </div>
  </div>
</section>
    `
}
