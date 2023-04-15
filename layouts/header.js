export function header () {
  return /* html */`
  <header id="header">
  <div id="logo">
    <img src="./image/logo.png" alt="Logo de equipo">
  </div>
  <div id="menu-hamburguesa">
  <span></span>
  <span></span>
  <span></span>
</div>

  <nav>
    <ul id="ul">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>

<main>
<section>
<h1>

</h1>
</section>
</main>
<form action="#" method="post">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Mensaje:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Enviar</button>
</form>
`
}
