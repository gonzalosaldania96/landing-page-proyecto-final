import $ from 'jquery';


export function scrollHeader() {
  const header = $('header');
  const ubicacionPrincipal = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const desplazamientoActual = window.pageYOffset;

    if (ubicacionPrincipal === desplazamientoActual) {
      header.css({ top: '0' });
    } else {
      header.css({ top: '-100px' });
    }
  });  
}


