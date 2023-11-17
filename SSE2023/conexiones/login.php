<?php
$servername = "localhost";
$username = "root";
$db_password = "";
$dbname = "sseitm";

// Crear conexión
$conn = new mysqli($servername, $username, $db_password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Datos del formulario (reemplaza estos valores con los datos reales del formulario)
$num_control = $_POST['num_control'];
$user_password = $_POST['password'];  // Cambié el nombre de la variable

// Consulta SQL para verificar las credenciales del usuario
$sql = "SELECT * FROM registro WHERE num_control = '$num_control' AND password = '$user_password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // El usuario ha iniciado sesión correctamente
    echo "Inicio de sesión exitoso";
    // Puedes redirigir al usuario a otra página o realizar otras acciones necesarias.
} else {
    // El usuario no ha iniciado sesión correctamente
    echo "Nombre de usuario o contraseña incorrectos";
}

// Cierra la conexión
$conn->close();
?>
