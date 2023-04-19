export default function formWizard(){
    return ` <div class="contenedor-wizard">
    <section class="section-wizard" >
        <form id="regForm" action="">
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
              </div> 

         
          <div class="tab tab-1">
            <h2>Datos personales</h2>
            <p><input id="nombre" placeholder="First name..." oninput="this.className = ''" name="nombre"></p>
            <div id="validacion" style="display: none;">los datos son incorrectos</div>
            <p><input id="apellido" placeholder="Last name..." oninput="this.className = ''" name="apellido"></p>
            <p><input id="pais" placeholder="Pais..." oninput="this.className = ''" name="pais"></p>
          </div>
          <div class="tab tab-2">Acerca del juego:
            <p><input id="genero-juego" placeholder="Genero..." oninput="this.className = ''" name="genero"></p>
            <p><input id="plataforma-juego" placeholder="Plataforma..." oninput="this.className = ''" name="plataforma"></p>
          </div> 
          <div class="tab tab-3">Extras:
            <p><input id="cant-horas" placeholder="Cantidad de horas..." oninput="this.className = ''" name="horas"></p>
            <p><input id="precio-juego" placeholder="precio..." oninput="this.className = ''" name="precio"></p>
            
          </div>
          <div id="form-enviado" style="display: none; font-size: 40px; color: white;">El formulario ha sido enviado!</div>
          <button id="btn-resumen" type="button" style="display: none;margin-bottom: 200px;">Generar Resumen</button>
          <div style="overflow:auto;"> 
            <div style="float:right;"> 
              <button type="button" id="prevBtn">anterior</button>  
              <button type="button" id="nextBtn">siguiente</button>  
            </div>  
          </div>

          <div id="steps" style="text-align:center;margin-top:40px;">  
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
            <span class="step"></span>
          </div>
        </form>
  
        <div class="section-img">

        </div>     
      </section>
    </div> `
}