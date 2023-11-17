<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/register.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Registro</title>
</head>

<body>
    <div class="container-form">
        <div class="form-information">
            <div class="form-information-chields">
                <h2>REGISTRO DE EGRESADOS</h2>
                <div class="texto">
                    <p style="color: #16305a;">Numero de control</p>
                </div>
                <form action="../conexiones/registro.php" method="post">
                    <label>
                        <i class='bx' style="color: #16305a;"></i>
                        <input type="text" name="num_control" placeholder="Núm. control">
                    </label>
                    <p style="color: #16305a;">Correo Institucional</p>
                    <label>
                        <i class='bx' style="color: #16305a;"></i>
                        <input type="text" name="correo" placeholder="Correo">
                    </label>
                    <p style="color: #16305a;">Contraseña</p>
                    <label>
                        <i class='bx' style="color: #16305a;"></i>
                        <input type="password" name="password" placeholder="password">
                    </label>

                    <input type="submit" value="Registrarme">
                    <p id="sinUp">¿Ya tienes una cuenta? <a href="../egresados/login.php">Inicia sesión</a> </p>
                </form>
            </div>

        </div>
        <div class="information">
            <div class="info-childs">
                <img src="../images/logo.png" alt="logo">
                <h2>Hola amigo,</h2>
                <p>Introduce tus datos personales y comienza,<br>
                    tu viaje con nosotros </p>
                <input onclick="redireccionar()" type="button" value="CONOCER MÁS!" id="infot">
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