import $ from 'jquery';


let arrayPaises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

const generosVideojuegos = ["Acción", "Aventura", "Deportes", "Estrategia", "Rol", "Disparos", "Carreras", "Simulación", "Plataformas", "Puzzle"];


let currentTab = 0; // La pestaña actual está configurada para ser la primera pestaña (0)
export function showTab(n) {
  // esta funcion va a mostrar un tab especifico 
  let x = document.querySelectorAll(".tab");
  console.log(x);
  x[n].style.display = "block"; 
  //... y corrija los botones Anterior/Siguiente:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none"; 
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }  
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... y ejecute una función que mostrará el indicador de paso correcto:
  fixStepIndicator(n) 
}

function nextPrev(n) {
  // Esta función determinará qué pestaña mostrar
  let x = document.getElementsByClassName("tab");
  // Salir de la función si algún campo en la pestaña actual no es válido:
  if (n == 1 && !validateForm()) return false;
  // Ocultar la pestaña actual:
  x[currentTab].style.display = "none";
  //Aumentar o disminuir la pestaña actual en 1:
  currentTab = currentTab + n; 
  // si has llegado al final del formulario...
  if (currentTab >= x.length) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "none";  
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("steps").style.display = "none";
    document.getElementById("form-enviado").style.display = "flex";
    document.getElementById("btn-resumen").style.display = "block";
    // ... el form es enviado:
    return false;
  }
  // De lo contrario, muestra la pestaña correcta:
  showTab(currentTab);
}

function validateForm() {
  // en esta funcion se validan los campos
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  //se checkean todos los campos(input)
  for (i = 0; i < y.length; i++) {
    // Si el input esta vacio
    if (y[i].value == "") {
      // se añade una clase "invalid"
      y[i].className += " invalid";
     
      //y establecer el estado válido actual en falso
      valid = false;
    }
  }
  //Si el estado válido es verdadero, marque el paso como finalizado y válido:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    // Actualizar la barra de progreso 
    updateProgressBar();  
}
  return valid; // devuelve el estado válido
} 

function fixStepIndicator(n) {
  // Esta función elimina la clase "active" de todos los pasos...
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... y agrega la clase "active" en el paso actual:
  x[n].className += " active";
}
 

// Obtengo el formulario y la barra de progreso


// Manejador de eventos para actualizar la barra de progreso
function updateProgressBar() {
   let progressBar = document.querySelector(".progress-bar");  
  // Obtengo la sección actual del formulario
  let currentSection = $(".tab:visible");
  
  // Obtengo el índice de la sección actual
  let currentIndex = $(".tab").index(currentSection);
  
  // Obtengo el número total de secciones
  let totalSections = $(".tab").length;
  
  // Calcul0 el porcentaje completado
  let percentComplete = ((currentIndex + 1) / totalSections) * 100;
  
  // Actualizo la barra de progreso
  progressBar.style.width = percentComplete + "%";
}  

 
export function formWizard(){
  const step = {siguiente: 1, anterior: -1}  
  const anterior = document.getElementById('prevBtn');
  const siguiente = document.getElementById('nextBtn');

  anterior.addEventListener('click', ()=>nextPrev(step.anterior));
 siguiente.addEventListener('click', ()=> nextPrev(step.siguiente));
}