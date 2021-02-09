function mostrar()
{
	let estado;
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	estado = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if(edad < 18 && estado != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN