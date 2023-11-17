<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sseitm";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Datos del formulario (reemplaza estos valores con los datos reales del formulario)
$num_control = $_POST['num_control'];
$correo = $_POST['correo'];
$password = $_POST['password'];

// Validar el formato del número de control (una letra seguida de 8 números)
if (!preg_match('/^[A-Za-z]\d{8}$/', $num_control)) {
    echo "El formato del número de control no es válido. Debe ser una letra seguida de 8 números.";
    $conn->close();
    exit();
}

// Validar correo electrónico
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo "Formato de correo electrónico no válido.";
    $conn->close();
    exit();
}

// Validar dominio del correo electrónico
$allowed_domains = array("minatitlan.tecnm.mx"); // Lista de dominios permitidos
$valid_domain = false;

foreach ($allowed_domains as $domain) {
    if (strpos($correo, $domain) !== false) {
        $valid_domain = true;
        break;
    }
}

if (!$valid_domain) {
    echo "El dominio del correo electrónico no es válido. Solo se permiten los dominios: " . implode(", ", $allowed_domains);
    $conn->close();
    exit();
}

// Validar longitud de la contraseña
$min_length_password = 8; // Establece la longitud mínima de la contraseña
if (strlen($password) < $min_length_password) {
    echo "La contraseña debe tener al menos $min_length_password caracteres.";
    $conn->close();
    exit();
}

// Consulta SQL para insertar datos
$sql = "INSERT INTO `registro` (`num_control`, `correo`, `password`) VALUES ('$num_control', '$correo', '$password')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    // Registro insertado correctamente, redirigir a otra página
    header("Location: ../egresados/login.php");
    exit(); // Asegura que el script se detenga después de la redirección
} else {
    echo "Error al insertar el registro: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>