
export default function HeroImg ({ img, text }) {
  const rutaPrincipal = import.meta.url.split('/').at(2)
  const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`

  return /* html */`
  <div class="slideshow-container">
    <div class="text-hero">${text}</div>
    <img src=${rutaImg} style="height:100%;width:100%;object-fit:cover;">
  </div>
    `
}
