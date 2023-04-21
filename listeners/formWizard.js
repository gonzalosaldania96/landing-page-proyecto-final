import $ from 'jquery'

// const arrayPaises = ['Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guyana', 'Guinea', 'Guinea ecuatorial', 'Guinea-Bisáu', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania', 'México', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 'Palaos', 'Palestina', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Reino Unido', 'República Centroafricana', 'República Checa', 'República de Macedonia', 'República del Congo', 'República Democrática del Congo', 'República Dominicana', 'República Sudafricana', 'Ruanda', 'Rumanía', 'Rusia', 'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue']

// const generosVideojuegos = ['Acción', 'Aventura', 'Deportes', 'Estrategia', 'Rol', 'Disparos', 'Carreras', 'Simulación', 'Plataformas', 'Puzzle']

function fixStepIndicator (specificStep) {
  // Esta función elimina la clase "active" de todos los pasos...
  const allStep = $('.step')
  const actualStep = $(allStep[specificStep])

  const lastStep = $(allStep[specificStep - 1])
  const nextStep = $(allStep[specificStep + 1])

  if (lastStep.hasClass('active')) {
    lastStep.removeClass('active')
  }
  if (nextStep.hasClass('active')) {
    nextStep.removeClass('active')
  }

  if (actualStep.hasClass('finish')) {
    actualStep.removeClass('finish')
  }
  // ... y agrega la clase "active" en el paso actual:
  lastStep.addClass('finish')
  actualStep.addClass('active')
}

// Obtengo el formulario y la barra de progreso

// Manejador de eventos para actualizar la barra de progreso
function updateProgressBar () {
  const progressBar = $('.progress-bar')
  // Obtengo el número total de secciones
  const totalSections = $('.tab').length
  let percentComplete = 0
  // Calcul0 el porcentaje completado
  if (currentTab > 0) {
    percentComplete = (currentTab / totalSections) * 100
  }

  // Actualizo la barra de progreso
  progressBar.css({ width: `${percentComplete}%` })
}

function validateForm () {
  // en esta funcion se validan los campos
  let valid = true
  const indexTab = currentTab + 1
  const tabInputs = $(`.tab-${indexTab} input`)
  // se checkean todos los campos(input)
  tabInputs.each((i_, tabInput) => {
    if ($(tabInput).val() === '') {
      // se añade una clase "invalid"
      $(tabInput).addClass('invalid')

      // y establecer el estado válido actual en falso
      valid = false
    } else {
      if ($(tabInput).hasClass('invalid')) {
        $(tabInput).removeClass('invalid')
      }
    }
  })
  return valid // devuelve el estado válido
}

function nextPrev (step) {
  console.log(step)
  // Esta función determinará qué pestaña mostrar
  const tabs = document.querySelectorAll('.tab')
  // Salir de la función si algún campo en la pestaña actual no es válido:
  if (step === 1 && !validateForm()) return
  // Ocultar la pestaña actual:
  $(tabs[currentTab]).css({ display: 'none' })
  // Aumentar o disminuir la pestaña actual en 1:
  currentTab = currentTab + step
  // si has llegado al final del formulario...
  if (currentTab >= tabs.length) {
    $('#nextBtn').css({ display: 'none' })
    $('#prevBtn').css({ display: 'none' })
    $('#prevBtn').css({ display: 'none' })
    $('#steps').css({ display: 'none' })
    $('#form-enviado').css({ display: 'flex' })
    $('#btn-resumen').css({ display: 'block' })
    // ... el form es enviado:
  }
  // De lo contrario, muestra la pestaña correcta:
  showTab(currentTab)
}

let currentTab = 0 // La pestaña actual está configurada para ser la primera pestaña (0)
export function showTab (step) {
  // esta funcion va a mostrar un tab especifico
  const tabs = document.querySelectorAll('.tab')

  $(tabs[step]).css({ display: 'block' })
  // ... y corrija los botones Anterior/Siguiente:
  if (step === 0) {
    $('#prevBtn').css({ display: 'none' })
  } else {
    $('#prevBtn').css({ display: 'inline' })
  }

  if (step === (tabs.length - 1)) {
    $('#nextBtn').text('Enviar')
  }
  // ... y ejecute una función que mostrará el indicador de paso correcto:
  updateProgressBar()
  fixStepIndicator(step)
}

export function formWizard () {
  const step = { siguiente: 1, anterior: -1 }
  const anterior = document.getElementById('prevBtn')
  const siguiente = document.getElementById('nextBtn')

  anterior.addEventListener('click', () => nextPrev(step.anterior))
  siguiente.addEventListener('click', () => nextPrev(step.siguiente))
}
