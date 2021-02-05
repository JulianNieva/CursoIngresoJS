function mostrar()
{
	//Establezco variable
	let edad;
		//Tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*Esta bien
	if(!(edad > 12 && edad < 18))
	{
		alert ("Usted NO es un adolescente");
	}*/

	if(edad < 13 || edad > 17)
	{
		alert ("Usted NO es un adolescente");
	}
}//FIN DE LA FUNCIÓN