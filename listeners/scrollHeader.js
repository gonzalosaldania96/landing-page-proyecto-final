import $ from 'jquery';

export function scrollHeader () {
  const ubicacionPrincipal = window.pageYOffset

  window.addEventListener('scroll', () => {
    console.log('Hola')
    const desplazamientoActual = window.pageYOffset
    if (ubicacionPrincipal === desplazamientoActual) {
      $('header').css({ top: ubicacionPrincipal })
      return
    }
    $('header').css({ top: '-100px' })
  })
}
