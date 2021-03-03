/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
		//Establezco Variables
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresado; // Deber ser entre 36°C hasta 39°C
	let respuesta;
	let temperaturaCorporalMaxima;
	let personaConMasTemperatura;
	let banderaTemperatura;
	let contadorMayoresDeEdadViudos;
	let contadorHombresViudos;
	let contadorPersonasTerceraEdad;
	let promedioEdadHombresSolteros;
	let acumuladorEdadesHombresSolteros;
	let contadorHombresSolteros;

	acumuladorEdadesHombresSolteros = 0;
	contadorHombresSolteros = 0;
	contadorHombresViudos = 0;
	contadorPersonasTerceraEdad = 0;
	contadorMayoresDeEdadViudos = 0;
	
	banderaTemperatura = 0;
	respuesta = "si";
		
		//Se inicia el while
	while(respuesta == "si")
	{
		nombreIngresado = prompt ("Ingrese el nombre del pasajero");	//Se solicita el nombre y se valida
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Por favor ingrese un nombre valido");
		}

		edadIngresada = prompt("Ingrese la edad del pasajero");	//Se solicita la edad  se valida
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada < 1)
		{
			edadIngresada = prompt("Error. Por favor ingrese una edad valida");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt ("Ingrese el sexo del pasajero");	//Se solicita el sexo y se valida
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error. Por favor ingrese un sexo valido, debe ser f o m");
		}

		estadoCivilIngresado = prompt ("Ingrese el estado civil del pasajero");	//Se solicita el estado civil y se valida
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error. Por favor ingrese un estado civil valido, debe ser soltero, casado o viudo");
		}

		temperaturaCorporalIngresado = prompt("Ingrese la temperatura corporal del pasajero");	//Se solicita la temperatura y se valida
		temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);
		while(isNaN(temperaturaCorporalIngresado) == true || temperaturaCorporalIngresado < 36 || temperaturaCorporalIngresado > 39)
		{
			temperaturaCorporalIngresado = prompt("Error. Por favor una temepratura corporal valida, debe ser entre 36 hasta 39");
			temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);
		}

		if(banderaTemperatura == 0)	
		{
			personaConMasTemperatura = nombreIngresado;
			temperaturaCorporalMaxima = temperaturaCorporalIngresado;
			banderaTemperatura = 1
		}
		else	//a) El nombre de la persona con mas temperatura.
		{
			if (temperaturaCorporalIngresado > temperaturaCorporalMaxima)
			{
				personaConMasTemperatura = nombreIngresado;
				temperaturaCorporalMaxima = temperaturaCorporalIngresado;	
			}
		}

		switch (estadoCivilIngresado)
		{
			case "viudo":
				if (sexoIngresado == "m")	//b) Cuantos mayores de edad estan viudos
				{
					contadorHombresViudos++;
				}
				if(edadIngresada > 17)
				{
					contadorMayoresDeEdadViudos++;
				}
				break;
			case "soltero":
				if(sexoIngresado == "m")	//c) La cantidad de hombres que hay solteros o viudos.
				{
					acumuladorEdadesHombresSolteros = acumuladorEdadesHombresSolteros + edadIngresada;	//e) El promedio de edad entre los hombres solteros.
					contadorHombresSolteros++;
					contadorHombresViudos++;
				}
				break;
		}
		/*if (edadIngresada > 17 && estadoCivilIngresado == "viudo")	//b) Cuantos mayores de edad estan viudos
		{
			contadorMayoresDeEdadViudos++;
		}*/

		/*if (sexoIngresado == "m" && estadoCivilIngresado == "viudo" || estadoCivilIngresado == "soltero")	//c) La cantidad de hombres que hay solteros o viudos.
		{
			contadorHombresSolterosYViudos++;
		}
		
		if(sexoIngresado == "m" && estadoCivilIngresado == "soltero")	//e) El promedio de edad entre los hombres solteros.
		{
			acumuladorEdadesHombresSolteros = acumuladorEdadesHombresSolteros + edadIngresada;
			contadorHombresSolteros++;
		}*/
		
		if (edadIngresada > 59 && temperaturaCorporalIngresado > 37)	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		{
			contadorPersonasTerceraEdad++;
		}

		respuesta = prompt ("Desea continuar?");
	}	//Fin de while

	promedioEdadHombresSolteros = acumuladorEdadesHombresSolteros / contadorHombresSolteros;	//e) El promedio de edad entre los hombres solteros.

	console.log("A- El nombre de la persona con mas temperatura es: " + personaConMasTemperatura + ", con una temperatura de: " + temperaturaCorporalMaxima + "°C");
	console.log("B- Las persona que son mayores de edad y estan viudos son en total: " + contadorMayoresDeEdadViudos);
	console.log("C- Los hombres que estan solteros y viudos son en total: " + contadorHombresSolterosYViudos);
	console.log("D- Las personas de tercera edad y que tienen mas de 38°C son en total:  " + contadorPersonasTerceraEdad);
	console.log("E- El promedio de edad entre los hombres solteros es de: " + promedioEdadHombresSolteros);
}
