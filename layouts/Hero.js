import HeroImg from '../components/HeroImg.js'
import imagenes from '../heroInfo.json'

export default function Hero () {
  return `<div class="hero">
    ${imagenes.map(({ img, text = '' }) => HeroImg({ img, text })).join('')}
    </div>
    `
}
