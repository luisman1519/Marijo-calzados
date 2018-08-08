<?php
	// crear.php
	
	// Conseguir los datos
	$nombre   = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$email    = $_POST['email'];
	$usuario  = $_POST['usuario'];
	$clave    = md5($_POST['clave']);
	
	
	
	// Conectarme a la BD
	include("conexion.php");
	
	// Crear la query (INSERT)
	$crear = "INSERT INTO usuarios
				VALUES(
					NULL,
					'$nombre',
					'$apellido',
					'$email',
					'$usuario',
					'$clave'
				)";

	//echo $crear;
	
	// Ejecutar la query
	$ej_crear = mysqli_query(
					$con, $crear
				   );
	
	header("location: crear.html");
?>