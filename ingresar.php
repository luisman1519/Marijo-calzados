<?php
	// login_pr.php
	
	// Consigo los datos del form
	$usuario = $_POST['usuario'];
	$clave   = $_POST['clave'];
	
	// Me conecto a la BD
	include("conexion.php");
	
	// Genero la query
	$preg = "SELECT * FROM usuarios
			 WHERE usuario = '$usuario'
			 AND   clave   = '$clave'";
	
	// Ejecuto la query
	$preg_ej = mysqli_query($con, $preg);
	
	// Pregunto si NO funcionó
	if($preg_ej === false){
		echo "Error, ver SQL";
	} else {
		echo "Vas bien";
	}
?>
