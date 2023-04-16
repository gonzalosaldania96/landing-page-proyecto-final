import HeroImg from '../components/HeroImg'

export default function Hero () {
  const imagenes = [{ img: 'gta.png', text: 'Soy rico , soy miserable, soy bastante promedio para esta ciudad Michael' }]
  return `<div>
    ${imagenes.map(({ img, text }) => HeroImg({ img, text })).join('')}
    </div>
    `
}
