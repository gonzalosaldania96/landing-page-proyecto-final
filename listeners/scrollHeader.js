import $ from 'jquery';


export function scrollHeader() {
  let scrollAnterior = 0;
  window.addEventListener('scroll', () => {
    const desplazamientoActual = window.scrollY;

    if (desplazamientoActual < scrollAnterior) {
      $('header').css({ top: 0 });
    } else {
      $('header').css({ top: '-100px' });
    }

    scrollAnterior = desplazamientoActual;
  });
}




