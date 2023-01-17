function nuevoAjax(){
	var xmlhttp=false;
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	}catch(e){
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(E){
			xmlhttp = false;
		}
	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}

	return xmlhttp;
}

function EnviarFormulario(){

	result = document.getElementById('envioOK');

	anombre=document.frmenvio.name.value;
	aapellido=document.frmenvio.lastname.value;
	aage=document.frmenvio.age.value;
	atelephone=document.frmenvio.telephone.value;
	aactivity=document.frmenvio.activity.value;
	acoment=document.frmenvio.coment.value;
	amail=document.frmenvio.mail.value;

	aenviar = 1;


	ajax=nuevoAjax();
	ajax.open("POST", "envioemail.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			result.innerHTML = ajax.responseText
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+anombre+"&email="+amail+"&telefono="+atelephone+"&apellido="+aapellido+"&actividad="+aactivity+"&comentario="+acoment+"&age="+aage+"&enviar="+aenviar)

}
