/*For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
Julian Leandro Nieva
Ejercicio 9 bis for*/

function mostrar()
{
		//Defino variables
	let contadorNumerosIngresados
	let	numeroIngresado;
	let numerosNegativoMayor;
	let numerosParesMenor;
	let banderaNumerosNegativos;
	let banderaNumerosPares;

	contadorNumerosNegativoMayor = 0;
	contadorNumerosPares = 0;
	
	banderaNumerosNegativos = 0;
	banderaNumerosPares = 0;

	for(contadorNumerosIngresados = 0; contadorNumerosIngresados < 10; contadorNumerosIngresados++)	//Se inicia el for si el contador es menor a 10
	{
		numeroIngresado = prompt("Ingrese un numero");	//Se le solicita al usuario que ingrese un numero
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) == true)	//Se valida el numero
		{
			numeroIngresado = prompt("Error. Por favor ingrese un numero valido");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado < 0)	//Se informa el mayor de los numero negativos
		{
			if(banderaNumerosNegativos == 0)
			{
				numerosNegativoMayor = numeroIngresado;
				banderaNumerosNegativos = 1;
			}
			else
			{
				if(numeroIngresado > numerosNegativoMayor)
				{
					numerosNegativoMayor = numeroIngresado;
				}
			}
		}

		if(numeroIngresado % 2 == 0 )	//Se informa el numero menor de los pares
		{
			if(banderaNumerosPares == 0)	
			{
				numerosParesMenor = numeroIngresado;
				banderaNumerosPares = 1;
			}
			else
			{
				if(numeroIngresado < numerosParesMenor)
				{
					numerosParesMenor = numeroIngresado;
				}
			}
		}
	} //Fin del for

	if (banderaNumerosPares == 0)
	{
		numerosParesMenor = "No hay numero pares";
	}
	
	if(banderaNumerosNegativos == 0)
	{
		numerosNegativoMayor = "No hay numeros negativos";
	}

	console.log(numerosParesMenor);
	console.log(numerosNegativoMayor);
}//FIN DE LA FUNCIÓN