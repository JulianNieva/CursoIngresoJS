function mostrar()
{
	//Establezco variable
	let edad;
		//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
		//Si se ingresa el valor de 17 para arriba imprime el mensaje
	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}
	else //En caso de que no tenga mas de 17 años inicia el else
	{
		if(edad > 12 ) //Si se ingreso un numero entre el 12 y el 18 imprime este mensaje
		{
			alert ("Usted es un adolescente");
		}
		else //En caso de que se ingrese un valor menor de 13 se imprime este ultimo mensaje
		{
			alert ("Usted es un niño");
		}
	}
} //FIN DE LA FUNCIÓN