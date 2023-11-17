let pagina = 1; // Página actual (inicialmente, página 1)

// Función para cambiar al contenido de la siguiente página
function siguientePagina() {
    if (pagina < 5) {
        // Cambia el número según el número total de páginas
        pagina++;
        actualizarContenido();
    }
}

// Función para cambiar al contenido de la página anterior
function regresarPagina() {
    if (pagina > 1) {
        pagina--;
        actualizarContenido();
    }
}

// Función para actualizar dinámicamente el contenido según la página
function actualizarContenido() {
    const progressBar = document.getElementById("progress-bar");
    const cuestionario = document.getElementById("cuestionario");
    const footer = document.getElementById("footer");
    const totalPaginas = 5;
    // Actualizar la barra de progreso
    if (pagina === 1) {
        progressBar.innerHTML = `
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    } else if (pagina === 2) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    } else if (pagina === 3) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    } else if (pagina === 4) {
        progressBar.innerHTML = `
 
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle">
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    } else if (pagina === 5) {
        progressBar.innerHTML = `
        <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">01</span>
                    <span class="text-plano ">Preeliminar</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
            </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">02</span>
                    <span class="text-plano ">Instrucciones</span>
                </div>                          
                <span class="bottom-text">Aprox 3 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">03</span>
                    <span class="text-plano ">Perfil y calidad</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">04</span>
                    <span class="text-plano ">Ubicación laboral</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
            <div class="line filled"></div>
            <div class="circle filled">
                <span class="checkmark">&#10003;</span>
                <div class="top-text">
                    <span class="text-negritas">05</span>
                    <span class="text-plano ">Desempeño y<br>espectativas</span>
                </div>                          
                <span class="bottom-text">Aprox 5 min</span>
                </div>
        `;
    }

    // Actualizar contenido del cuestionario
    if (pagina === 1) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin:3%; background-color:withe; padding: 3%; margin-top: 0px; margin-left: -50px; ">
<div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <div class="linea"><p></p></div>
    <h1>Preeliminar</h1>

        <p>Instituto tecnologico de Minatitlán</p>
        <p>Fecha:</p>
        <p>Estimado Egresado:</p>
        <p>Los servicios educativos de este instituto tecnologico debe estar en mejora continua para
            asegurar la pertinencia de los conocimientos adquiridos y mejorar sistematicamente, para
            colaborar en la formacion integral de nuestros alumnos.
            para esto es indispensable tomarte en cuenta como factor de cambios y reformas, por lo que por
            este medio solicitamos tu valiosa
            participacion y cooperacion en esta investigacion del.</p>
        <p>Seguimiento de Egresados, que nos permitirá obtener informacion valiosa para analizar la
            problematica del mercado laboral y sus
            caracteristicas, asi como las competencias laborales de nuestros egresados.
            Las respuestas del cuestionario anexo seran tratadas con absoluta confidencialidad y con fines
            meramente estatidiscos.</p>
        <p>con nuestro agradecimiento por tu cooperación, recibe un cordial saludo.</p>
        <p>Atentamente</p>
        <p>SERGIO FERNANDO GARIBAY ARMENTA</p>
        <p>Director del plantel</p>
    </div>

</div>
        `;
    } else if (pagina === 2) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin:3%; background-color:withe; padding: 3%; margin-top: -20px; margin-left: -50px; ">
            <div class="content-wrapper">
    <div class="text-content">
    <img src="https://sic.cultura.gob.mx/images/65091" class="side-image">
    <h1>Instrucciones</h1>
        <p>Por favor lea cuidadosamente y conteste este cuestionario de la siguiente manera, según sea el caso:</p>
        <p>
            <ol>
                <li> En el caso de preguntas cerradas, marque la que considere apropiada de esta
                manera: (x) </li>
                <li> En las preguntas de valoración se utiliza la escala del 1 al 5 en la que 1 es “muy malo” y 5 es “muy bueno”. </li>
                <li> En los casos de preguntas abiertas dejamos un espacio para que usted escriba con mayúscula una respuesta (______________________________). Si el espacio para su respuesta no es suficiente, por favor añada una hoja adicional al cuestionario. </li>
                <li> Al final anexamos un inciso para comentarios y sugerencias, le agradeceremos anote ahí lo que considere prudente para mejorar nuestro sistema educativo o bien los temas que, a su juicio, omitimos en el cuestionario. </li>
            </ol>
        .</p>
        <p>Gracias por su gentil colaboración.</p>
    </div>

        `;
    } else if (pagina === 3) {
        cuestionario.innerHTML = `
        <h1 style="color: #1B396A; padding: 40px;"></h1>
        <h1>Perfil y calidad</h1>
        <h4>I. Perfil del Egresado</h4>
        <div class="container-fluid" >
		<form action="pagina.php" method="GET" style="margin:3%; background-color:#F2F2F2; padding: 3%; margin-left: -10px;">
			<div class="form-group">
				<div class="row0">
					
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Nombre</label>
						<input  class="form-control"type="text" id="nombres" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Martina"> 
					</div>
					<!-- segunda columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Apellido Paterno</label>
						<input  class="form-control"type="text" id="apellidoM" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Hernandez">
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Apellido Materno</label>
						<input  class="form-control"type="text" id="apellidoP" pattern="[A-Za-z]+" title="Solo se permiten letras" placeholder="Ej. Lopez">
					</div>
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Numero de control</label>
						<input  class="form-control"type="number" id="Ncontrol" min="8" max="8"  placeholder="Ej. 18230752" >						
					</div>								    

			<!-- segunda fila -->        
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Feha de nacimiento</label>
						<input  class="form-control"type="date" id="nacimiento" placeholder="Fecha de nacimiento">
					</div>
					<!-- segunda columna -->
					<div class="col" >
						<label style="color:#203c6c" for="validationTooltip01">Curp</label>
						<input  class="form-control"type="text" id="curp" maxlength="18" minlength="18" placeholder="Ej. FEPM890204HASRRN08">
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c"  for="validationTooltip01">Sexo</label>
						<select class="form-control" >
							<option value="" selected disabled>Selecciona una opcion</option>
							<option>Femenino</option>
							<option>Masculino</option>
						</select>
					</div>
					<!-- cuarta columna -->
					
					<div class="col">	
						<label style="color:#203c6c" for="validationTooltip01">Estado civil</label>
						<select class="form-control" >
							<option value="" selected disabled>Selecciona una opcion</option>
							<option>Soltero(a)</option>
							<option>Casado(a)</option>
							<option>Otro</option>
						</select>						
					</div>


			<!-- tercera fila -->        
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Domicilio</label>
						<input  class="form-control"type="text" id="calle"  placeholder="Calle">
						
					</div>
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">N ext</label>
						<input  class="form-control"type="text" id="nDomicilio"  placeholder="Numero">
						
					</div>
					<!-- segunda columna -->
					<div class="col" >
						<label style="color:#203c6c" for="validationTooltip01">Colonia</label>
						<input  class="form-control"type="text" id="colonia"  placeholder="Colonia">
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c"  for="validationTooltip01">Codigo postal</label>
						<input  class="form-control"type="number" id="cp" min="" max=""  placeholder="Ej. 96536" >
					</div>
					<!-- cuarta columna -->
					
					<div class="col">	
						<label style="color:#203c6c" for="validationTooltip01">Ciudad</label>
						<input  class="form-control"type="text" id="ciudad"  placeholder="Ciudad">
					</div>

		    <!-- cuarta fila -->        
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Municipio</label>
						<input  class="form-control"type="text" id="calle"  placeholder="Calle">
						
					</div>
					
					<!-- segunda columna -->
					<div class="col" >
						<label style="color:#203c6c" for="validationTooltip01">Estado</label>
						<select class="form-control" id="Estado">
							<option value="" selected disabled>Selecciona una opcion</option>
							    <option value="Aguascalientes">Aguascalientes</option>
								<option value="Baja California">Baja California</option>
								<option value="Baja California Sur">Baja California Sur</option>
								<option value="Campeche">Campeche</option>
								<option value="Chiapas">Chiapas</option>
								<option value="Chihuahua">Chihuahua</option>
								<option value="Coahuila">Coahuila</option>
								<option value="Colima">Colima</option>
								<option value="Durango">Durango</option>
								<option value="Guanajuato">Guanajuato</option>
								<option value="Guerrero">Guerrero</option>
								<option value="Hidalgo">Hidalgo</option>
								<option value="Jalisco">Jalisco</option>
								<option value="Estado de Mexico">Estado de Mexico</option>
								<option value="MichoacÃ¡n">Michoacan</option>
								<option value="Morelos">Morelos</option>
								<option value="Nayarit">Nayarit</option>
								<option value="Nuevo Leon">Nuevo Leon</option>
								<option value="Oaxaca">Oaxaca</option>
								<option value="Puebla">Puebla</option>
								<option value="Queretaro">Queretaro</option>
								<option value="Quintana Roo">Quintana Roo</option>
								<option value="San Luis Potosi">San Luis Potosi</option>
								<option value="Sinaloa">Sinaloa</option>
								<option value="Sonora">Sonora</option>
								<option value="Tabasco">Tabasco</option>
								<option value="Tamaulipas">Tamaulipas</option>
								<option value="Tlaxcala">Tlaxcala</option>
								<option value="Veracruz">Veracruz</option>
								<option value="Yucatan">Yucatan</option>
								<option value="Zacatecas">Zacatecas</option>
						</select>
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c"  for="validationTooltip01">Telefono celular</label>
						<input  class="form-control"type="number" id="telefonocelular" min="10" max="10"  placeholder="Ej. 9228347838" >
					</div>
					<!-- cuarta columna -->
					
					<div class="col">	
						<label style="color:#203c6c" for="validationTooltip01">Correo electronico</label>
						<input  class="form-control"type="email" id="correo"  placeholder="Ej. raton@gmail.com">
					</div>

			<!-- quinta fila -->        
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Carrera de egreso</label>
						<select class="form-control" id="carrera">
							<option value="" selected disabled>Selecciona una opcion</option>
							    <option value="Ingenieria en Gestion Empresarial">Ingenieria en Gestion Empresarial</option>
								<option value="Ingenieria Electromecanica">Ingenieria Electromecanica</option>
								<option value="Ingenieria en Sistemas Computacionales">Ingenieria en Sistemas Computacionales</option>
								<option value="Ingenieria Electronica">Ingenieria Electronica</option>
								<option value="Ingenieria Ambiental">Ingenieria Ambiental</option>
								<option value="Ingenieria Industrial">Ingenieria Industrial</option>
								<option value="Ingenieria Quimica">Ingenieria Quimica</option>
								<option value="Licenciatura en Administracion">Licenciatura en Administracion</option>								
						</select>						
					</div>
					
					<!-- segunda columna -->
					<div class="col" >
						<label style="color:#203c6c" for="validationTooltip01">Especialidad</label>
						<input  class="form-control"type="text" id="especialidad"  placeholder="Especialidad">
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c"  for="validationTooltip01">Fecha de egreso</label>
						<input  class="form-control"type="date" id="egreso" placeholder="Fecha de egreso">
					</div>
					<!-- cuarta columna -->
					
					<div class="col">	
						<label style="color:#203c6c" for="validationTooltip01">Titulado</label>
						<select class="form-control" id="titulado">
							<option value="" selected disabled>Selecciona una opcion</option>
							    <option value="si">Si</option>
								<option value="No">No</option>
								
						</select>
					</div>

			<!-- sexta fila -->
					<!-- primera columna -->
					<div class="col">
						<label style="color:#203c6c" for="validationTooltip01">Dominio de idioma extranjero Ingles</label>
						<select class="form-control" id="ingles">
							<option value="" selected disabled>Selecciona una opcion</option>
							    <option value="si">Si</option>
								<option value="No">No</option>								
						</select>
						
					</div>
					
					<!-- segunda columna -->
					<div class="col" >
						<label style="color:#203c6c" for="validationTooltip01">Otro idioma</label>
						<input  class="form-control"type="text" id="otroidioma"  placeholder="opcional">
					</div>
					<!-- tercera columna -->
					<div class="col">
						<label style="color:#203c6c"  for="validationTooltip01">Codigo postal</label>
						<input  class="form-control"type="number" id="cp" min="" max=""  placeholder="Ej. 96536" >
					</div>
					<!-- cuarta columna -->
					
					<div class="col">	
						<label style="color:#203c6c" for="validationTooltip01">Manejo de paquetes computacionales</label>
						<input  class="form-control"type="text" id="ciudad"  placeholder="Ciudad">
					</div>
			 </div>
        
			
			
			<button class="btn btn-default" type="submit">Guardar</button>
		</form>
	</div>



        <h1>Perfil y calidad</h1>
            <h4>II. Pertinencia y disponibilidad de medios y recursos para el aprendizaje</h4>
            <p>Califique la calidad de la educación profesional proporcionada por el personal docente, así como el Plan de
                Estudios de la <br> carrera que cursó y las condiciones del plantel en cuanto a infraestructura</p>
                
        <div class="container-fluid" >
		<form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px; margin-top: 1%;">
        <div class="container">
        <div class="form-group">
            <div class="row">
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">1. Calidad de los docentes:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">2. Plan de estudios:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">3. Oportunidad de participar en proyectos
                        <br>de investigación y desarrollo:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">4. Enfasis que se le prestaba a la
                        investigación dentro del proceso de enseñanza:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">5. Satisfacción con las condiciones de
                        (infraestructura):</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                </div>
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">6. Experiencia obtenida a través de la
                        residencia profesional:</h6>
                    <select>
                        <option selected>Seleccione una opcion</option>
                        <option value="1">Muy buena</option>
                        <option value="2">Buena</option>
                        <option value="3">Regular</option>
                        <option value="4">Regular</option>
                    </select>
                    <button class="btn btn-default" type="submit">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `;
    } else if (pagina === 4) {
        cuestionario.innerHTML = `
        <h1 style="color: #1B396A; padding: 40px;"></h1>
        <h1>Desempeño y espectativas</h1>
<h4>IV. Desempeño profesional de los egresados</h4>
<h5>Marcar los campos que correspondan a su trayectoria profesional</h5>

        <form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: -10px; margin-top: 1%;">
            
        <div class="form-group1">
            <div class="row1">
      
                <div class="col">
                    <h6 style="color: #1B396A; padding: 10px;">1. Eficiencia para realizar las actividades
                     laborales,
                     en relación son su formación académica:</h6>
             <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Muy eficiente</option>
              <option value="2">Eficiente</option>
              <option value="3">Poco eficiente</option>
              <option value="4">Deficiente</option>
            </select>
          </div>
      
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">2. Como califica su formación académica con
              respecto a su desempeño laboral:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Excelente</option>
              <option value="2">Bueno</option>
              <option value="3">Regular</option>
              <option value="4">Malo</option>
              <option value="4">Pésimo</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">3. Utilidad de las residencias profesionales
              para su desarollo laboral y profesional:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">Excelente</option>
              <option value="2">Bueno</option>
              <option value="3">Regular</option>
              <option value="4">Malo</option>
              <option value="4">Pésimo</option>
            </select>
            <button class="btn btn-default" type="submit">Guardar</button>
        </form>
          </div>
          </div>

            <h4>V. 4. Aspectos que valora la empresa u organismo para la
            contratación de egresados. Llena el formulario, donde 1 es es poco y 5 mucho.</h4>

            <div class="form-group1">
            <div class="row2">
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Área o campo de estudio:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Titulación:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Competencia laboral: análisis, aprendizaje,
              trabajo en equipo.</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          </div>
          <div class="form-group1">
          <div class="row3">
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Experiencia laboral/ Práctica (antes de
              egresar):</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Capacidad de liderazgo:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Conocimiento de idiomas extranjeros:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          </div>
          <div class="form-group1">
          <div class="row4">
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Posicionamiento de la institución de egreso:
            </h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Recomendaciones / Referencias:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Personalidad / Actitudes:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
          </div>
          </div>
          <div class="form-group1">
          <div class="row5">
          <div class="col">
            <h6 style="color: #1B396A; padding: 10px;">Otros aspectos:</h6>
            <select>
              <option selected>Seleccione una opcion</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
            </select>
            <button class="btn btn-default" type="submit">Guardar</button>
            </form>
          </div>
        </div>
      </div>
        `;
    } else if (pagina === 5) {
        cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin: 13%; background-color:#F2F2F2; padding: 0%; margin-left: 10px;">
        <div class="content12">
        <div class="text-content">
            <h1>Desempeño y espectativas</h1>
            <hr>
    
            <h3>V. Expectativas de desarrollo, superación profesional y de actualización</h3>
            <div class="container12">
                <div class="component-group">
                    <div class="component">
                        <label for="combo1">1.¿Le gustaría tomar cursos de actualización?</label>
                        <select id="combo1">
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="opcion1">Sí</option>
                            <option value="opcion2">No</option>
                        </select>
                    </div>
                    <div class="component">
                        <label for="textfield1">Mencione algunos cursos:</label>
                        <input type="text" id="textfield1" placeholder="Especificar">
                    </div>
                    <div class="component">
                        <button id="button1">Botón</button>
                    </div>
                    <div class="component">
    
                    </div>
                    <div class="component">
                        <label for="combo">2.¿Le gustaría estudiar algún posgrado?</label>
                        <select id="combo">
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="component">
                        <label for="textfield2">Mencione algún posgrado:</label>
                        <input type="text" id="textfield2" placeholder="Especificar">
                    </div>
                    <div class="component">
                        <button id="button2">Botón</button>
                    </div>
                </div>
            </div>
    
    
            <h3>VI. Participación social de egresados</h3>
            <div class="container12">
                <div class="group-row">
    
                    <div class="component2">
                        <label for="combo1">1.¿Pertenece a organizaciones sociales?</label>
                        <select id="combo1">
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                        </select>
                        <label for="textfield1" class="textFieldVI">Mencione a cuales:</label>
                        <div class="awa">
                            <input type="text" id="textfield1" placeholder="Especificar">
                            <button class=buttonVI>Botón</button>
                        </div>
                    </div>
    
                    <div class="component2">
                        <label for="combo2">2.¿Pertenece a organismos de profesionistas?</label>
                        <select id="combo2">
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                        </select>
                        <label for="textfield1" class="textFieldVI">Mencione a cuales:</label>
                        <div class="awa">
                            <input type="text" id="textfield1" placeholder="Especificar">
                            <button class=buttonVI>Botón</button>
                        </div>
                    </div>
    
                    <div class="component2">
                        <label for="combo3">3.¿Pertenece a la asociación de egresados?</label>
                        <select id="combo3">
                            <option value="" disabled selected hidden>Seleccione una opción</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                        </select>
                        <label for="textfield1" class="textFieldVI">Mencione la asociación:</label>
                        <div class="awa">
                            <input type="text" id="textfield1" placeholder="Especificar">
                            <button class=buttonVI>Botón</button>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <h3>VII. Comentarios y sugerencias</h3>
            <div class="container12">
                <label for="textarea1">Opinión o recomendación para mejorar la formación profesional de un egresado de su
                    carrera</label>
                <textarea id="textarea1" placeholder=""></textarea>
                <button class="btn btn-default" type="submit">Guardar</button>
                </form>
            </div>
        </div>
    </div>

        `;
    }

    if (pagina === 1) {
        footer.innerHTML = `
        <span class="page-counter1">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>
        `;
    } else if (pagina === 5) {
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button> 
        <span class="page-counter5">${pagina}/${totalPaginas}</span> 
        `;
    } else {
        footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button>
        <span class="page-counter">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>   
        `;
    }
}

window.onload = function () {
    actualizarContenido();
};
