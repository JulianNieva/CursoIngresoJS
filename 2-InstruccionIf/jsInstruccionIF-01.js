function mostrar()
{
	//Establezco variable
	let edad;
		//tomo la edad  
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
		//Se usa el doble igual por si la edad es igual a 15, por lo que se inicia el codigo que se encuentra en el renglon de abajo
	/*if (edad == 15)
			//Se muestra este mensaje si el usuario ingresa 15 en el cuadro
		alert("Eres una niña bonita");*/
	if(edad==15)
	{
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN