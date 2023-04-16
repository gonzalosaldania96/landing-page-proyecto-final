
export default function HeroImg ({ img, text }) {
  const rutaPrincipal = import.meta.url.split('/').at(2)
  const rutaImg = `http://${rutaPrincipal}/image/hero/${img}`

  return /* html */`
  <div class="slideshow-container">
  <img src=${rutaImg} style="height:100%;width:100%;object-fit:cover;filter: blur(2px);">
    <div style="
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30px;
    width: 500px;
    font-weight: bold;
    transform: translate(-50%,-50%);
    color: red;">
    <h2>${text}</h2>
    </div>
  </div>
    `
}
