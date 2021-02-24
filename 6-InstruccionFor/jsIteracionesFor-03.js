/*al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
Julian Leandro Nieva 1°C
Ejercicio for 3*/

function mostrar()
{
		//Establezco variables
	let mensaje;
	let repeticiones;
		//Le solicito al usuario la cantidad de veces que desea repetir el mensaje Hola UTN FRA
	repeticiones = prompt ("Ingrese la cantidad que quiero repetir el mensaje. Hola UTN FRA");
	repeticiones = parseInt(repeticiones);
	
	for(mensaje = 0; mensaje < repeticiones; mensaje++)	
	{
		console.log("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN