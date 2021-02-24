/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Julian Leandro Nieva 1°C
Ejercicio 10*/
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado > 0) //Se comprueba si el usuario ingreso un numero positivo
		{
			sumaPositivos += numeroIngresado;
			cantidadPositivos++; //Se le agrega uno a las veces que el usuario ingrese un numero positivo
		}
		else
		{
			if(numeroIngresado == 0) //Si el usuario ingresa 0 se inicia el codigo
			{
				cantidadCeros++;
			}
			else // En caso de que el usuario ingrese un numero negativo, se inicia este codigo
			{
				sumaNegativos -= numeroIngresado;
				cantidadNegativos++;	//Se le agrega uno a las veces que el usuario ingrese un numero negativo
			}
		}
		if (numeroIngresado % 2 == 0)	//Se comprueba si el numero ingresado es par
		{
			cantidadPares++; // Si es par, se le agrega uno
		}	
		respuesta = prompt("Desea continuar?");
	}//Fin del while

	if (cantidadPositivos > 0) // Se comprueba si la cantidad de positivos es mayor a 0
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}
		else //en caso contrario se inicia este codigo
		{
			promedioNegativos = sumaNegativos / cantidadNegativos;
		}
	diferencia = sumaPositivos - sumaNegativos; // Se saca la diferencia de la suma total de los numero positivos y negativos

		//Se escriben todos los datos ingresados
	document.write("<br> 1- la suma de los negativos es :" + sumaNegativos);
	document.write("<br> 2- la suma de los positivos es :" + sumaPositivos);
	document.write("<br> 3- la cantidad de los numeros positivos es :" + cantidadPositivos);
	document.write("<br> 4- la cantidad de los numeros negativos es :" + cantidadNegativos);
	document.write("<br> 5- la cantidad de los ceros es :" + cantidadCeros);
	document.write("<br> 6- la cantidad de numeros pares es :" + cantidadPares);
	document.write("<br> 7- el promedio de los positivos es :" + promedioPositivos);
	document.write("<br> 8- el promedio de los negativos es :" + promedioNegativos);
	document.write("<br> 9- la diferencia entre los positivos y negativos es :" + diferencia);
}//FIN DE LA FUNCIÓN