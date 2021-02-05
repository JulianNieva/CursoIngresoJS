function mostrar()
{
	let edad;
	let estadoCivil;
	
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);

	if(estadoCivil == "Soltero" && !(edad < 18))
	{
		alert("Es soltero y NO es menor");
	}
}//FIN DE LA FUNCIÓN