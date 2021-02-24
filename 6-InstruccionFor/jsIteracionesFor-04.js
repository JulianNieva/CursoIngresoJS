/*al presionar el botón repetir hasta que utilizamos 'BREAK'
Julian Leandro Nieva 1°C
Ejercicio for 4*/

function mostrar()
{
	let contador;

	for(contador = 0; contador < 10; contador ++)
	{
		if(contador == 5)
		{
			console.log("BREAK " + contador);
			break;
		}
		console.log(contador);
	}
}//FIN DE LA FUNCIÓN