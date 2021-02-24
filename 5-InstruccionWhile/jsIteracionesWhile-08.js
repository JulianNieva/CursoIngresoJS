/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Julian Leandro Nieva 1°C
Ejercicio 8*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta='si';

	while(respuesta == "si")
		{
			numeroIngresado = prompt("Ingrese un número");	//El usuario debe ingresar un numero
			numeroIngresado = parseInt (numeroIngresado);

			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado; //Se van sumando todos los numeros que vaya ingresando el usuario
			}
			else
			{
				multiplicacionNegativos = numeroIngresado * multiplicacionNegativos //Se van multiplicando todo los numero negativos que el usuario ingrese
			}
			respuesta = prompt ("Desea ingresar otro numero?"); //Se le cuestiona al usuario de agregar otro numero, si su respuesta es "no" el loop se termina
		}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN