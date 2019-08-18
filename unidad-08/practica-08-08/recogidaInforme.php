<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>recogida datos</title>
</head>
<body>
	<h1>Datos del informe de incidencia</h1>
	<?php
		echo "<h2>Tipo de incidencia</h2>";
		if(isset($_POST["tipo"])) echo "<p>".$_POST["tipo"]."</p>";
		else echo "<p>Desconocida</p>";
		echo "<h2>Nº de serie</h2>";
		if(isset($_POST["serie"])) echo "<p>".$_POST["serie"]."</p>";
		else echo "<p>Desconocida</p>";
		if(isset($_POST["descripcion"])) {
			echo "<h2>Descripción</h2>";
			echo "<p>".$_POST["descripcion"]."</p>";
		}
		
	?>
</body>
</html>