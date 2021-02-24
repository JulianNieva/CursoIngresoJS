/*al presionar el botón repetir el pedido de número hasta que ingresemos el 9
Julian Leandro Nieva 1°C
Ejercicio 5 for*/

function mostrar()
{
	let numeroIngresado;
	let contador;

	for(contador = 0; ; contador ++)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado == 9)
		{
			alert("Usted ingreso 9, por eso mismo, BREAK");
			break
		}
		alert("Usted ingreso el numero " + numeroIngresado);
	}
}//FIN DE LA FUNCIÓN