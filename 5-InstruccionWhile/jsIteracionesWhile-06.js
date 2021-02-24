/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Julian Leandro Nieva 1°C
Ejercicio 6*/ 

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador = 0; //Establezco por predeterminado los valores
	acumulador = 0;

	while(contador < 5) //Se ejecutara el while mientras que el contador sea menor a 5
	{
		numeroIngresado = prompt("Ingrese un número");	//El usuario debe ingresar un numero
		numeroIngresado = parseInt (numeroIngresado);

		acumulador = acumulador + numeroIngresado; //Se van sumando todos los numeros que vaya ingresando el usuario
		contador++; //El contador va sumando a medida que el usuario ingrese un numero (un maximo de 5 veces)
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;	//Se muestran los resultados por ID
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN