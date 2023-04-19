import HeroImg from '../components/HeroImg.js'

export default function Hero ({ imagenes }) {
  return `<div class="hero">
    ${imagenes.map(({ img, text = '' }) => HeroImg({ img, text })).join('')}
    </div>
    `
}
