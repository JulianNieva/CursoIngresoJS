function mostrar()
{
	let edad;
	let estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN