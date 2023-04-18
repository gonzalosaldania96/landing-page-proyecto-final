import $ from 'jquery'

function validarFormulario (evento) {
  evento.preventDefault()

  const nombre = document.getElementById('nombre').value
  const email = document.getElementById('email').value
  const mensaje = document.getElementById('mensaje').value
  const mensajeErrorName = document.getElementById('error-mensaje')
  const mensajeErrorEmail = document.getElementById('error-mensaje-1')
  const formEnviado = document.getElementById('ok-form')
  const mensajeErrorTextTarea = document.getElementById('error-mensaje-2')
  let acumulador = 0

  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (nombre.trim() === '' || nombre.length < 4) {
    // alert('El campo Nombre es obligatorio')
    mensajeErrorName.style.display = 'block'
    disapprove('#nombre')
  } else {
    mensajeErrorName.style.display = 'none'
    approve('#nombre')
    acumulador++
  }

  if (email.trim() === '') {
    mensajeErrorEmail.style.display = 'block'
    disapprove('#email')
  } else {
    approve('#email')
    acumulador++
  }

  if (!email.match(reg)) {
    // alert('El campo Email no tiene un formato válido')
    mensajeErrorEmail.style.display = 'block'
    disapprove('#email')
  } else {
    mensajeErrorEmail.style.display = 'none'
    approve('#email')
    acumulador++
  }

  if (mensaje.trim() === '' || mensaje.length < 5) {
    // alert('El campo Mensaje es obligatorio')
    disapprove('#mensaje')
    mensajeErrorTextTarea.style.display = 'block'
  } else {
    approve('#mensaje')
    mensajeErrorTextTarea.style.display = 'none'
    acumulador++
  } 

  if (acumulador === 4) {
    // eslint-disable-next-line no-undef
    alert('el form ha sido enviado')
    setTimeout(() => { resetear(evento.target) }, 3000)
  }
}

function approve (selector) {
  $(selector).css({ 'border-bottom': '1px solid green', transition: '.7s' })
}

function disapprove (selector) {
  $(selector).css({ 'border-bottom': '1px solid red', transition: '.7s' })
}

function resetear (form) {
  form.reset()
  $('#nombre').css({ 'border-bottom': '1px solid white', transition: '.7s' })
  $('#email').css({ 'border-bottom': '1px solid white', transition: '.7s' })
  $('#mensaje').css({ 'border-bottom': '1px solid white', transition: '.7s' })
}

export function formContact () {
  const formulario = document.querySelector('.contacto__form')
  formulario.addEventListener('submit', validarFormulario)
}
