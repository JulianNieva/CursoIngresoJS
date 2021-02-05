function mostrar()
{
		//Establezco variable
	let edad;
		//Tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	/*if(edad >12) 
	{
		if(edad <18)
		alert("Usted es un adolescente")
	}*/

	if(edad > 12 && edad < 18)
	{
		alert ("Usted es un adolescente");
	}

}//FIN DE LA FUNCIÓN