export function GridImage (imgUrl) {
  const rutaPrincipal = import.meta.url.split('/').at(2)
  const rutaImg = `http://${rutaPrincipal}/image/hero/${imgUrl}`
  return `<img src=${rutaImg}/>`
}
