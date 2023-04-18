import { generateRuteImg } from '../utils'

export function GridImage (imgUrl) {
  const rutaImg = generateRuteImg(imgUrl)
  return `<img src=${rutaImg}/>`
}
