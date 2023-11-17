let pagina = 1; // Página actual (inicialmente, página 1)

// Función para cambiar al contenido de la siguiente página
function siguientePagina() {
  if (pagina < 3) {
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
  const totalPaginas = 3;
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
        `;
  }

  // Actualizar contenido del cuestionario
  if (pagina === 1) {
    cuestionario.innerHTML = `
        <form action="pagina.php" method="GET" style="margin:3%; background-color:withe; padding: 3%; margin-top: 60px; margin-left: -50px; ">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/datos_gen.css">
        <h1>Datos generales</h1>
        <hr>
            <h4>A. Datos Generales de la Empresa u Organismo</h4><br>
                    <div class="content-wrapper">
                        <div class="text-content1">               
                              <div id="gContainer" class="container-flex">
                                      <div  class="col">
                                        <div >
                                          <div id="card1">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;" >Nombre de la empresa:</h6>
                                            <input type="text" placeholder="Ej: ABC compañia" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card2">
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;">Calle:</h6>
                                            <input type="text" placeholder="Calle" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card3" >
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;">Número:</h6>
                                            <input type="text" placeholder="Número" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card4" >
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 5px;">Código Postal:</h6>
                                            <input type="text" placeholder="Código Postal" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                          <div id="card5" >
                                            <div class="card-body" >
                                              <h6 class="card-title" style="color: #1B396A; padding: 5px;">Colonia:</h6>
                                              <input type="text" placeholder="Colonia" style="margin: 5px;">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col">
                                          <div id="card6" >
                                            <div class="card-body">
                                              <h6 class="card-title" style="color: #1B396A; padding: 5px;">Estado:</h6>
                                              <input type="text" placeholder="Estado" style="margin: 5px;">
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                      <div  class="col">
                                        <div >
                                          <div id="card7">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;" >Ciudad:</h6>
                                            <input type="text" placeholder="Ciudad" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card8">
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;">Municipio:</h6>
                                            <input type="text" placeholder="Municipio" style="margin: 5px;">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card9" >
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;">Correo Electronico:</h6>
                                            <input type="email" required placeholder="Ej. Dianapeh3@gmali.com" style="margin: 5px;">
                                            <button onclick="agregarInputEmail()" class="icon-btn">
                                              <i class="fa-solid fa-square-plus"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div id="card10" >
                                          <div class="card-body">
                                            <h6 class="card-title" style="color: #1B396A; padding: 10px;">Telefono Celular:</h6>
                                            <input type="text" placeholder="Ej. 9211102566" style="margin: 5px;">
                                            <button onclick="agregarInputTel()" class="icon-btn">
                                              <i class="fa-solid fa-square-plus"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col">
                                          <div id="card11" >
                                            <div class="card-body" >
                                              <h6 class="card-title" style="color: #1B396A; padding: 10px;" >Su empresa u organismo es:</h6>
                                              <select class="form-select" aria-label="Default select example">
                                                <option selected>Seleccione una opcion</option>
                                                <option value="1">Pública</option>
                                                <option value="2">Privada</option>
                                                <option value="3">Social</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col">
                                          <div id="card12" >
                                            <div class="card-body">
                                              <h6 class="card-title" style="color: #1B396A; padding: 10px;" >Tamaño de la empresa u organismo:</h6>
                                              <select class="form-select" aria-label="Default select example">
                                                <option selected>Seleccione una opcion</option>
                                                <option value="1">Microempresa</option>
                                                <option value="2">Pequeña</option>
                                                <option value="3">Mediana</option>
                                                <option value="4">Grande</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col">
                                          <div id="card13" >
                                            <div class="card-body">
                                              <h6 class="card-title" style="color: #1B396A; padding: 10px; padding-bottom: 10px;" >Actividad económica de la empresa u organismo:</h6>
                                              <select class="form-select" aria-label="Default select example">
                                                <option selected>Seleccione una opcion</option>
                                                <option value="1">Agroindustrial</option>
                                                <option value="2">Silvicultura</option>
                                                <option value="3">Pesca y acuacultura</option>
                                                <option value="4">Minería</option>
                                                <option value="5">Alimentos, bebidas y tabaco</option>
                                                <option value="6">Textiles, vestido y cuero</option>
                                                <option value="7">Madera y sus productos</option>
                                                <option value="8">Papel, imprenta y editoriales</option>
                                                <option value="9">Química</option>
                                                <option value="10">Caucho y Plástico</option>
                                                <option value="11">Minerales no metálicos</option>
                                                <option value="12">Industrias metálicas básicas</option>
                                                <option value="13">Productos metálicos, maquinaria y equipo</option>
                                                <option value="14">Construcción</option>
                                                <option value="15">Electricidad, gas y agua</option>
                                                <option value="16">Comercio y turismo</option>
                                                <option value="17">Transporte, almacenaje y comunicaciones</option>
                                                <option value="18">Servicios financieros, seguros, actividades inmobiliarias y de alquiler</option>
                                                <option value="19">Educación</option>
                                                <option value="20">Otra</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                    
                              </div>
                        </div>
        
                           
                        </div>
                    </div>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

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
		<form action="pagina.php" method="GET" style="margin:3%; background-color:#F2F2F2; padding: 3%; margin-left: 10px;">
			
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<link rel="stylesheet" href="/competencia.css">
<div class="content-wrapper3">
  <div class="text-content3">

    <h3>Competencias</h3>
    <hr>
    <h4 style="padding: 30px;">C. Competencias Laborales</h4>
    <div id="gContainer" class="container-flex">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col-md-12">
          <h6 style="font-size: bold; padding: 10px; color: black;">En su opinión ¿qué competencias considera deben
            desarrollar los egresados del Instituto Tecnológico, para desempeñarse eficientemente en sus actividades
            laborales? Por favor evalúe conforme a la tabla siguiente: Califique del 1(menor) al 5(mayor):</h5>
        </div>
        <div class="container">
          <div class="col">
            <div id="card1">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Habilidad para resolver conflictos *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card2">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Trabajo en equipo *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card3">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Facilidad de palabra *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card4">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Cumplimiento de las normas *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card5">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Capacidad de negociación *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="col">
            <div id="card6">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Ortografía y redacción de documentos *
                </h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card7">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Habilidad para administrar tiempo *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card8">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Gestión de proyectos *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card9">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Integración al trabajo *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card10">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Abstracción, análisis y síntesis *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card11">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Adaptar al cambio *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="col">
            <div id="card12">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Mejora de procesos *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card1">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Seguridad personal *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card1">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Puntualidad y asistencia *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card1">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Creatividad e innovación *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <div id="card1">
              <div class="card-body">
                <h6 class="card-title" style="color: #1B396A; padding: 10px;">Liderazgo y toma de decisión *</h6>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <h6 style="font-size: bold; padding: 10px; color: black;">Con base al desempeño laboral así como a las
            actividades laborales que realiza el egresado. ¿Cómo considera su desempeño laboral respecto a su formación
            académica? *</h5>
        </div>
        <div class="container">
          <div class="col">
            <div id="card1">
              <div class="card-body">

                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccione una opcion</option>
                  <option value="1">Excelente</option>
                  <option value="2">Muy bueno</option>
                  <option value="3">Bueno</option>
                  <option value="4">Regular</option>
                  <option value="5">Malo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <h6 style="font-size: bold; padding: 10px; color: black;">De acuerdo con las necesidades de su empresa u
            organismo, ¿Qué sugiere para mejorar la formación de los egresados del Instituto Tecnológico? *</h5>
            <div class="container">
              <div class="col-md-12">
                <textarea placeholder="Escriba sus sugerencias" name="" id="" cols="145" rows="3"></textarea>
              </div>
              <div class="col-md-12">
                <h6 style="text-align: center; color: black; font-size: bold; padding: 10px;">Comentarios y Sugerencias
                </h6>
              </div>
              <div class="col-md-12">
                <textarea placeholder="Escriba sus sugerencias" name="" id="" cols="145" rows="3"></textarea>
              </div>
            </div>

        </div>
      </div>


    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
        `;
  }

  if (pagina === 1) {
    footer.innerHTML = `
        <span class="page-counter1">${pagina}/${totalPaginas}</span>
        <button id="goForward" class="button-forward" onclick="siguientePagina()"></button>
        `;
  } else if (pagina === 3) {
    footer.innerHTML = `
        <button id="goBackward" class="button-backward" onclick="regresarPagina()"></button> 
        <span class="page-counter3">${pagina}/${totalPaginas}</span> 
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
