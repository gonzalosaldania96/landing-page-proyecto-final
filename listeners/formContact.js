import { validate } from 'validate.js'

const restricciones = {
  nombre: {
    presence: { message: 'El campo nombre es obligatorio' }
  },
  email: {
    presence: { message: 'El campo email es obligatorio' },
    email: { message: 'El campo email debe ser una dirección de correo electrónico válida' },
    format: {
      pattern: /^\S+@\S+\.\S+$/,
      message: 'El campo email debe ser una dirección de correo electrónico válida'
    }
  },
  mensaje: {
    presence: { message: 'El campo mensaje es obligatorio' }
  }
}

export function formContact () {
  const form = document.querySelector('.contacto__form')
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const datosform = new FormData(form)
    const dato = {
      nombre: datosform.get('nombre'),
      email: datosform.get('email').trim(),
      mensaje: datosform.get('mensaje')
    }

    const errores = validate(dato, restricciones)

    if (errores) {
      const primeraclavedeerror = Object.keys(errores)[0]
      const primermensajedeerror = errores[primeraclavedeerror][0]
      const errordecampo = form.querySelector(`[name="${primeraclavedeerror}"]`)

      errordecampo.setCustomValidity(primermensajedeerror)
      errordecampo.reportValidity()
    } else {
      let etapaactual = null
      const formGroups = form.querySelectorAll('.form-group')
      for (let i = 0; i < formGroups.length; i++) {
        if (formGroups[i].style.display !== 'none') {
          etapaactual = formGroups[i]
          break
        }
      }

      if (etapaactual && etapaactual.nextElementSibling) {
        etapaactual.style.display = 'none'
        etapaactual.nextElementSibling.style.display = 'block'
      } else {
        form.submit()
      }
    }
  })
}
