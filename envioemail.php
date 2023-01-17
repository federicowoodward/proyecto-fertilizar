<?php
	if($_POST[enviar]){
			$email_content = "-------------------------Consulta desde Campaña Fertilizar----------------------------\n\n";
			$email_content .= "Nombre: $_POST[nombre]\n";
			$email_content .= "Apellido: $_POST[apellido]\n";
			$email_content .= "Edad: $_POST[age]\n";
			$email_content .= "Email: $_POST[email]\n";
			$email_content .= "Telefono: $_POST[telefono]\n";
			$email_content .= "Actividad: $_POST[actividad]\n";
			$email_content .= "Comentario: $_POST[comentario]\n";
			$email_content .= "\r\n\nAtentamente,\n\nFertilizar Asociacion Civil \n \n(54)11 43822413";

			$subject = "Contacto Campaña Fertilizar";

			//abosch@fertilizar.org.ar

			mail("abosch.fertilizar@gmail.com", $subject, $email_content, "From: info@fertilizar.org.ar");
			echo"Envio con exito, le responderemos a la brevedad";
			}
?>
