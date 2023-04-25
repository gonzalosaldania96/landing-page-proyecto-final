import { generarPDF } from './generarPDF'
export function generarResumen () {
  const resumen = document.querySelector('#btn-resumen')
  const buttonPDF = document.querySelector('#generarPDF')

  const obj = {}
  const arrayCliente = ['nombreCliente', 'apellidoCliente', 'pais', 'generoJuego', 'plataformaJuego', 'cantHoras', 'precioJuego']
  arrayCliente.forEach(id => {
    obj[id] = document.getElementById(id).value
  })
  console.log(obj)
  const dialog = document.querySelector('dialog')

  resumen.addEventListener('click', () => {
    const dataResumen = document.querySelectorAll('.dato-resumen p')

    arrayCliente.forEach((keyData, i) => {
      if (keyData === 'cantHoras') {
        console.log(keyData)
        dataResumen[i].innerHTML = obj[keyData] + ' hs'
      }

      if (keyData === 'precioJuego') {
        console.log(keyData)
        dataResumen[i].innerHTML = `$ ${obj[keyData]}`
      }

      dataResumen[i].innerHTML = obj[keyData]
    })
    dialog.showModal()
  })
  buttonPDF.addEventListener('click', () => {
    generarPDF(obj)
    dialog.close()
  })
}
