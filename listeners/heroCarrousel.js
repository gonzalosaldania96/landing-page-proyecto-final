export function heroCarrousel () {
  const images = document.querySelectorAll('.slideshow-container img')
  let currentIndex = 0
  const slideDuration = 5500 // Duración de cada diapositiva en milisegundos

  function showNextSlide () {
  // Ocultar la diapositiva actual
    images[currentIndex].style.opacity = 0
    // Calcular el índice de la próxima diapositiva
    currentIndex = (currentIndex + 1) % images.length
    // Mostrar la próxima diapositiva
    images[currentIndex].style.opacity = 1
  }

  // Mostrar la primera diapositiva
  images[currentIndex].style.opacity = 1

  // Cambiar de diapositiva automáticamente
  setInterval(showNextSlide, slideDuration)
}
