import $ from 'jquery'

function showNextSlide ({ parrafo, images, currentIndex }) {
// Ocultar la diapositiva actual
  images[currentIndex].style.opacity = 0
  parrafo[currentIndex].style.opacity = 0
  // Calcular el índice de la próxima diapositiva
  currentIndex = (currentIndex + 1) % images.length
  // Mostrar la próxima diapositiva
  images[currentIndex].style.opacity = 1
  parrafo[currentIndex].style.opacity = 1
  return currentIndex
}

export function heroCarrousel () {
  const images = $('.slideshow-container img')
  const parrafo = $('.slideshow-container .text-hero')
  const slideDuration = 5500 // Duración de cada diapositiva en milisegundos

  // Mostrar la primera diapositiva

  // Cambiar de diapositiva automáticamente
  let currentIndex = 0

  setInterval(() => {
    console.log(currentIndex)
    images[currentIndex].style.opcaity = 1
    parrafo[currentIndex].style.opacity = 1
    currentIndex = showNextSlide({ parrafo, images, currentIndex })
  }, slideDuration)
}
