/*al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
Julian Leandro Nieva
Ejercicio 7 for*/

function mostrar()
{
	let numeroIngresado;
	let contador;
	let contadorDivisores;

	contadorDivisores = 0;
	
	numeroIngresado = prompt("Ingrese un numero mayor a 1");	//Le solicito al usuario que ingrese un numero

	while(isNaN(numeroIngresado) == true || numeroIngresado < 1)	//Se valida el numero
	{
		numeroIngresado = prompt ("Error. Por favor ingrese un numero mayor a 1");

	}
	numeroIngresado = parseInt(numeroIngresado);

	for(contador = 0 ;contador < numeroIngresado ; contador++)	//Se inicia el for
	{
		if (numeroIngresado % contador == 0)
		{
			console.log(contador);
			contadorDivisores++;
		}
	}

	alert("Los numeros divisores encontrados del numero " + numeroIngresado + " son en total: " + contadorDivisores);
}//FIN DE LA FUNCIÓN