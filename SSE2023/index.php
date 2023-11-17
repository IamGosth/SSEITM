<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../SSE2023/css/home.css">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark  fixed-top">
    <div class="container-fluid">
      <img src="../SSE2023/images/logo.png" alt="logo">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://minatitlan.tecnm.mx/">Nuestra Institución</a>
          </li>
          <a class="nav-link active" aria-current="page" href="../SSE2023/egresados/register.php">Registro</a>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../SSE2023/egresados/login.php">Iniciar
              Sesión</a>
          </li>
          <li><a class="nav-link active" aria-current="page" href="../SSE2023/egresados/Home.php">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header>
    <div class="container">
      <div class="banner">
        <div class="text-area">
          <p class="fw-bold" style="font-size: 25px;">SISTEMA DE SEGUIMIENTO DE EGRESADOS <br>
            DEL INSTITUTO TECNOLÓGICO DE <br>
            MINATITLÁN (SSE-ITM) </p>
        </div>
        <p>El SSE-ITM es el sistema que permite el análisis del desempeño e <br>
          impacto de los egresados en el sector laboral</p>
        <p class="banner-btn">
          <a href="#importantes"> conocer más</a>
        </p>
      </div>
    </div>
  </header>
  <section id="importantes">
    <div class="container">
      <h2 style="color: #16305a;">¿POR QUÉ ES IMPORTANTE?</h2>
      <div id="cartas">
        <div class="card" style="width: 18rem;">
          <img src="./images/busqueda.png" class="card-img-top" alt="busqueda" id="busco">
          <div class="card-body">
            <h5 class="card-title">RECABAR INFORMACIÓN</h5>
            <p class="card-text">Producir indicadores que permitan al instituto Tecnológico de Minatitlán
              conocer la situación laboral del egresado.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="./images/datos.png" z class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">DATOS DE EMPRESAS</h5>
            <p class="card-text">La información que se deriva de estos debe ser analizada y utilizada para
              emprender acciones de mejora a los planes y programas de estudio de la calidad académica
              en general.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="./images/soporte.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">OFRECER SOPORTE</h5>
            <p class="card-text">Recabar y actualizar la información ayuda a proveer elementos para
              la mejora continua y el desarrollo profesional de nuestros egresados en el sector
              laboral.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</body>

</html>