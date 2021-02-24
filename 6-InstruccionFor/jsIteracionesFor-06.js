/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
Julian Leandro Nieva 1°C
Ejercicio 6 for*/

function mostrar()
{
		//Establezco variables
	let numeroIngresado;
	let contador;
	
	numeroIngresado = prompt("Ingrese un numero mayor a 1");	//Le solicito al usuario que ingrese un numero

	while(isNaN(numeroIngresado) == true || numeroIngresado < 1)	//Se valida el numero
	{
		numeroIngresado = prompt ("Error. Por favor ingrese un numero mayor a 1");

	}
	numeroIngresado = parseInt(numeroIngresado);

	for(contador = 0 ;contador < numeroIngresado ; contador++)	//Se inicia el for
	{
		
		if (numeroIngresado % (contador + 1) == 0)	//En caso de que se encuentre un numero par, se lo muestra en el console.log
		{
			console.log(contador + 1);
		}
	}
}//FIN DE LA FUNCIÓN