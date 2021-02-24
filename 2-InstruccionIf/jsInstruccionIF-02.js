function mostrar()
{
	//Establezco variable
	let edad;
		//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es mayor de edad")
	}
}//FIN DE LA FUNCIÓN