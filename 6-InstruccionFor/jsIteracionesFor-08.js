/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no
Julian Leandro Nieva 1°C
Ejercicio 7 for;*/

	/*let numeroIngresado;
	let contador;

	numeroIngresado = prompt("Ingrese un numero mayor a 1");	//Le solicito al usuario que ingrese un numero

	while(isNaN(numeroIngresado) == true || numeroIngresado < 1)	//Se valida el numero
	{
		numeroIngresado = prompt ("Error. Por favor ingrese un numero mayor a 1");

	}
	numeroIngresado = parseInt(numeroIngresado);

	for(contador = 2;contador < (numeroIngresado/2); contador++)
	{
		if(numeroIngresado % contador == 0)
		{
			break;
		}
	}
	if(contador != (numeroIngresado/2) - 1)
	{
		console.log("No es primo");
	}
	else
	{
		console.log("Es primo");
	}*/


	function mostrar()
{
	var numeroIngresado;
	var i;
	var mitadNumeroIngresado
	let contadorDivisores;

	contadorDivisores = 0;

	numeroIngresado=prompt("ingrese numero a verificar");
	mitadNumeroIngresado = numeroIngresado / 2;
	mitadNumeroIngresado = parseInt(mitadNumeroIngresado);

	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(i=0;i<(mitadNumeroIngresado);i++)
	{
		if(numeroIngresado%i==0)
		{
			contadorDivisores++;
		}

		if(contadorDivisores > 1)
		{
			break;
		}
	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(contadorDivisores > 1)
	{
		console.log("no es primo");
	}
	else
	{
		console.log("ES primo");
	}

}//FIN DE LA FUNCIÓN

