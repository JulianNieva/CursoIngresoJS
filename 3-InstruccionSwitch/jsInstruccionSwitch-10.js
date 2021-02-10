/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o 
"No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche

Julian Leandro Nieva 1°C*/ 

function mostrar()
{		//Estzblezco las variables
	let estacionIngresada;
	let destinoIngresado;
	let viajar;
		//Se obtiene dichas variables mediante ID
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
		//Se asigna un valor predeterminado a "viajar" para luego ser modificado dentro de los bloques de codigo de if
	viajar = 0;

	switch (estacionIngresada)
	{
		case "Invierno":	//En caso de que el usuario ingrese Invierno por ID, se ejecuta este codigo
			if(destinoIngresado == "Bariloche")	 
				{
					viajar = 1;	
				}
			break;
		case "Verano":	//En caso de que el usuario ingrese Verano por ID, se ejecuta este codigo
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas")
				{
					viajar = 1;
				}
			break;
		case "Otoño":	//En caso de que el usuario ingrese Otoño por ID, se ejecuta este codigo
			viajar = 1;
			break;
		case "Primavera":	//En caso de que el usuario ingrese Primavera por ID, se ejecuta este codigo
			if (destinoIngresado != "Bariloche")	
				{
					viajar = 1;
				}
			break;
	}

	if (viajar == 1)	//Aca se comprueba el valor asignado a la variable viajar, si es igual a 1, se ejecuta el alert de la linea 49
		{
			alert ("Se viaja");
		}
		else	//En caso contrario, se se ejecuta el alert de la linea 53
		{
			alert ("No se viaja");
		}		
}//FIN DE LA FUNCIÓN