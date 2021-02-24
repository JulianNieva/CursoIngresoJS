/*
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.
Julian Leandro Nieva 1°C
*/
function mostrar()
{
		//Establezco las variables
	let numerosIngresados;
	let contadorNumeroEntre10Y20;
	let promedioNumeroEntre10Y20;
	let acumuladorNumerosEntre10Y20;
	let respuesta;

	respuesta = "si";
	contadorNumeroEntre10Y20 = 0;
	acumuladorNumerosEntre10Y20 = 0;

	while(respuesta == "si")	//Si se cumple esta condicion, se inicia el loop
	{
		numerosIngresados = prompt("Ingrese un numero");
		numerosIngresados = parseInt (numerosIngresados);
		while(isNaN(numerosIngresados) == true)
		{
			numerosIngresados = prompt("Error. Por favor ingrese un numero valido");
			numerosIngresados = parseInt (numerosIngresados);
		}
		
		if(numerosIngresados > 9 && numerosIngresados < 21)	//Se consulta si el numero ingresado esta entre 10 y 20
		{
			contadorNumeroEntre10Y20++;	//Se suma 1 al contador, para luego ser utilizado para el promedio
			acumuladorNumerosEntre10Y20 = acumuladorNumerosEntre10Y20 + numerosIngresados;	//Se van acumulando los numeros que cumplan con la condicion de la linea 27
		}

		respuesta = prompt("Desea continuar?");
	}
	promedioNumeroEntre10Y20 = acumuladorNumerosEntre10Y20 / contadorNumeroEntre10Y20; 	//Se realiza el promedio

	console.log("El promedio de los numeros ingresados entre 10 y 20 es de: " + promedioNumeroEntre10Y20);
}//FIN DE LA FUNCIÓN