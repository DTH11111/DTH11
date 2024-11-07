<!DOCTYPE html>
<html>
<head>
    <title>Mi Primera Página PHP</title>
    <meta charset="UTF-8">
</head>
<body>
<?php
    // Esto es un comentario en PHP
    $mensaje = "Hola Mundo desde PHP";
    echo "<h1>$mensaje</h1>";
 
    // Mostrar la hora actual
    $hora = date("H:i:s");
    echo "<p>La hora actual es: $hora</p>";
?>
</body>
</html>
