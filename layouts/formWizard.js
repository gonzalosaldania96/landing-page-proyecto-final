export default function formWizard () {
  return /* html */` <div class="contenedor-wizard">
    <section class="section-wizard" >
        <form id="regForm" action="">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
              </div> 

         
          <div class="tab tab-1">
            <h2>Datos personales</h2>
            <p>Nombre <input id="nombreCliente" placeholder="Franco, Pablo, Gonza, ..." name="nombre"></p>
            <div id="validacion" style="display: none;">los datos son incorrectos</div>
            <p>Apellido <input id="apellidoCliente" placeholder="Alvarez, Mendez, ..." name="apellido"></p>
            <p>Pais <input id="pais" placeholder="Argentina, Francia, ..." name="pais"></p>
          </div>

          <div class="tab tab-2">
            <h2>Acerca del juego</h2>
            <p><input id="generoJuego" placeholder="Genero..."  name="genero"></p>
            <p><input id="plataformaJuego" placeholder="Plataforma..." name="plataforma"></p>
          </div>

          <div class="tab tab-3">
            <h2>Extras</h2>
            <p>Cantidad horas <input id="cantHoras" placeholder="5,10,15,24,..." name="horas"></p>
            <p>Precio <input id="precioJuego" placeholder="1500,5000,15000, ..." name="precio"></p>
          </div>

          <div id="form-enviado" style="display: none; font-size: 40px; color: white;">El formulario ha sido enviado!</div>
          <button id="btn-resumen" type="button" style="display: none;margin-bottom: 200px;">Generar Resumen</button>
          <div style="overflow:auto;"> 
            <div style="float:right;"> 
              <button type="button" id="prevBtn">Anterior</button>  
              <button type="button" id="nextBtn">Siguiente</button>  
            </div>  
          </div>

          <div id="steps" style="text-align:center;padding-top:50px">  
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
  
        <div class="section-img">
          <dialog>
            <h2>RESUMEN</h2>
            <article>

            <section class="dato-resumen">
              <h3> NOMBRE :</h3>
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> APELLIDO :</h3>
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> PAIS :</h3>
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> GENERO DE JUEGO :</h3>
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> PLATAFORMA :</h3> 
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> CANTIDAD DE HORAS :</h3>
              <p></p>
            </section>

            <section class="dato-resumen">
              <h3> PRECIO : </h3>
              <p></p>
            </section>

            
            </article>
            <img src="./soldado-guerra.png" alt="" />
            <button type="button" id="generarPDF"> GENERAR PDF </button>
          </dialog>
        </div>     
      </section>
    </div> `
}
