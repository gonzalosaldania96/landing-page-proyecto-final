import $ from 'jquery'

function showNextSlide ({ parrafo, images, currentIndex }) {
// Ocultar la diapositiva actual
  $(images[currentIndex]).css({ opacity: 0 })
  $(parrafo[currentIndex]).css({ opacity: 0 })
  // Calcular el índice de la próxima diapositiva
  currentIndex = (currentIndex + 1) % images.length
  // Mostrar la próxima diapositiva
  $(images[currentIndex]).css({ opacity: 1 })
  $(parrafo[currentIndex]).css({ opacity: 1 })

  return currentIndex
}

export function heroCarrousel () {
  const images = $('.slideshow-container img')
  const parrafo = $('.slideshow-container .text-hero')
  const slideDuration = 5500 // Duración de cada diapositiva en milisegundos

  let currentIndex = 0

  if (currentIndex === 0) {
    $(images[currentIndex]).css({ opacity: 1 })
    $(parrafo[currentIndex]).css({ opacity: 1 })
  }

  setInterval(() => {
    currentIndex = showNextSlide({ parrafo, images, currentIndex })
  }, slideDuration)
}
