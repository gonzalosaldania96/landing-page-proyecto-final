import { generateRuteImg } from '../utils'

export default function HeroImg ({ img, text }) {
  const rutaImg = generateRuteImg(img)

  return /* html */`
  <div class="slideshow-container">
    <div class="text-hero">${text}</div>
    <img src=${rutaImg} style="height:100%;width:100%;object-fit:cover;">
  </div>
    `
}
