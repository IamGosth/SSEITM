<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Formulario de inicio</title>
</head>

<body>
    <div class="container-form">
        <div class="information">
            <div class="info-childs">
                <img src="../images/logo.png" alt="logo">
                <h2>Bienvenido de nuevo,</h2>
                <p>Para mantenerse conectado con nosotros,<br>
                    inicie sesión con su información personal </p>
                <input type="button" value="CONOCER MÁS!" id="infot" onclick="redireccionar()">
            </div>
        </div>
        <div class="form-information">
            <div class="form-information-chields">
                <h2>INICIO DE SESIÓN</h2>
                <div class="texto">
                    <p style="color: #16305a;">Numero de control</p>
                </div>
                <form action="../conexiones/login.php" method="post">
                    <label>
                        <i class='bx bxs-user' style="color: #16305a;"></i>
                        <input type="text" id="num_control" placeholder="Num. control">
                    </label>
                    <p style="color: #16305a;">Contraseña</p>
                    <label>
                        <i class='bx bxs-lock-alt' style="color: #16305a;"></i>
                        <input type="password" id="password" placeholder="password">
                    </label>
                    <input type="submit" value="Iniciar Sesión">
                    <p id="sinUp">¿No tienes una cuenta? <a href="../egresados/register.php">Registrate</a> </p>
                </form>
            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script>
        function redireccionar() {
            // Redirige al usuario a otro HTML
            window.location.href = '../index.php';
        }
    </script>
</body>

</html>