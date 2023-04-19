import $ from 'jquery'

function validarFormulario (evento) {
  evento.preventDefault()

  const nombre = $('#nombre').val
  const email = $('#email').val
  const mensaje = $('#mensaje').val
  const mensajeErrorName = $('#error-mensaje')
  const mensajeErrorEmail = $('#error-mensaje-1')
  const mensajeErrorTextTarea = $('#error-mensaje-2')
  let acumulador = 0

  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (nombre.trim() === '' || nombre.length < 4) {
    // alert('El campo Nombre es obligatorio')
    mensajeErrorName.css({ display: 'block' })
    disapprove('#nombre')
  } else {
    mensajeErrorName.css({ display: 'none' })
    approve('#nombre')
    acumulador++
  }

  if (email.trim() === '') {
    mensajeErrorEmail.css({ display: 'block' })
    disapprove('#email')
  } else {
    approve('#email')
    acumulador++
  }

  if (!email.match(reg)) {
    // alert('El campo Email no tiene un formato válido')
    mensajeErrorEmail.css({ display: 'block' })
    disapprove('#email')
  } else {
    mensajeErrorEmail.css({ display: 'none' })
    approve('#email')
    acumulador++
  }

  if (mensaje.trim() === '' || mensaje.length < 5) {
    // alert('El campo Mensaje es obligatorio')
    disapprove('#mensaje')
    mensajeErrorTextTarea.css({ display: 'block' })
  } else {
    approve('#mensaje')
    mensajeErrorTextTarea.css({ display: 'none' })
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
