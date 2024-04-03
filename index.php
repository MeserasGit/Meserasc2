<?php
// Configuración de la conexión a la base de datos
$servername = "localhost"; // Cambia localhost por la dirección del servidor si es necesario
$username = "meserasc_stir"; // Cambia usuario por tu nombre de usuario de MySQL
$password = "MeserasStir123#"; // Cambia contraseña por tu contraseña de MySQL
$database = "meserasc_nuevastir"; // Cambia nombre_base_de_datos por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

echo "Conexión exitosa a la base de datos";

// Cerrar conexión
$conn->close();
?>
