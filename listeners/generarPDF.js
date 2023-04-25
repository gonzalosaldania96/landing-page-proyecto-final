import { jsPDF as JS_PDF } from 'jspdf'

export function generarPDF ({ nombreCliente, apellidoCliente, pais, generoJuego, plataformaJuego, cantHoras, precioJuego }) {
  const doc = new JS_PDF()
  doc.setTextColor(255, 255, 255)
  doc.setFillColor(70, 69, 69) // Color amarillo claro
  doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F') // Dibujo un rectángulo que cubra toda la página con el color de fondo

  const title = 'Resumen del formulario'
  const fontSize = 18

  //  Obtengo la longitud del título
  const textWidth = doc.getTextWidth(title)

  //  Calcula la posición central en la página
  const pageWidth = doc.internal.pageSize.width
  const xPos = (pageWidth - textWidth) / 2

  //  Agrega el título centrado
  doc.setFontSize(fontSize)
  doc.text(title, xPos, 5)

  doc.text(`Usuario: ${nombreCliente}`, 10, 20)
  doc.text(`Apellido: ${apellidoCliente}`, 10, 30)
  doc.text(`Pais: ${pais}`, 10, 40)
  doc.text(`Genero: ${generoJuego}`, 10, 50)
  doc.text(`Plataforma: ${plataformaJuego}`, 10, 60)
  doc.text(`Cant horas jugadas: ${cantHoras} hs`, 10, 70)
  doc.text(`Costo: $ ${precioJuego}`, 10, 80)
  doc.save('formulario.pdf')
}
