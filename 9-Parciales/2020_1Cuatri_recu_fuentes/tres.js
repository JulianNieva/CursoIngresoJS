/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
Julian Leandro Nieva 1°C
parcial recu 2020*/

function mostrar()
{
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let banderaNacionalidadDeLaPersonasConMasTemperatura;
	let nacionalidadDeLaPersonaConMasTemperatura;
	let temperaturaCorporalMaxima;
	let contadorMayoresDeEdadSolteros;
	let contadorMujeresSolteras;
	let contadorMujeresViudas;
	let contadorPersonasTerceraEdad;
	let acumuladorMujeresCasadas;
	let contadorMujeresCasadas;
	let promedioMujeresCasadas;

	acumuladorMujeresCasadas = 0;
	
	contadorMujeresCasadas = 0;
	contadorPersonasTerceraEdad = 0;
	contadorMujeresSolteras = 0;
	contadorMujeresViudas = 0;
	contadorMayoresDeEdadSolteros = 0;

	banderaNacionalidadDeLaPersonasConMasTemperatura = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		nombreIngresado = prompt ("Ingrese el nombre del pasajero");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt ("Error. Por favor ingrese un nombre valido");
		}

		nacionalidadIngresada = prompt ("Ingrese la nacionalidad del pasajero");
		while(isNaN(nacionalidadIngresada) == false)
		{
			nacionalidadIngresada = prompt ("Error. Por favor ingrese una nacionalidad valida");
		}

		edadIngresada = prompt ("Ingrese la edad del pasajero");
		edadIngresada = parseInt (edadIngresada);
		while(isNaN(edadIngresada) == true)
		{
			edadIngresada = prompt ("Error. Por favor ingrese una edad valida");
			edadIngresada = parseInt (edadIngresada);
		}

		sexoIngresado = prompt ("Ingrese el sexo del pasajero");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt ("Error. Por favor ingrese un sexo valido");
		}

		estadoCivilIngresado = prompt ("Ingrese el estado civil del pasajero");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt ("Error. Por favor ingrese un estado civil valido");
		}

		temperaturaCorporalIngresada = prompt ("Ingrese la temperatura corporal del pasajero");
		temperaturaCorporalIngresada = parseInt (temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 36 || temperaturaCorporalIngresada > 39)
		{
			temperaturaCorporalIngresada = prompt ("Error. Por favor ingrese una temperatura valida (Entre 36 y 39");
			temperaturaCorporalIngresada = parseInt (temperaturaCorporalIngresada);
		}

		if(banderaNacionalidadDeLaPersonasConMasTemperatura == 0)
		{
			temperaturaCorporalMaxima = temperaturaCorporalIngresada;
			nacionalidadDeLaPersonaConMasTemperatura = nacionalidadIngresada;
			banderaNacionalidadDeLaPersonasConMasTemperatura = 1;
		}
		else
		{
			if(temperaturaCorporalIngresada > temperaturaCorporalMaxima)
			{
				temperaturaCorporalMaxima = temperaturaCorporalIngresada;
				nacionalidadDeLaPersonaConMasTemperatura = nacionalidadIngresada;
			}
		}

		switch (estadoCivilIngresado)
		{
			case "soltero":
				if(edadIngresada > 17)
				{
					contadorMayoresDeEdadSolteros++;
				}
				if(sexoIngresado == "f")
				{
					contadorMujeresSolteras++;
				}
				break;
			case "viudo":
				if (sexoIngresado == "f")
				{
					contadorMujeresViudas++;
				}
				break;
			case "casado":
				if(sexoIngresado == "f")
				{
					acumuladorMujeresCasadas = acumuladorMujeresCasadas + edadIngresada;
					contadorMujeresCasadas++;
				}
		}//Fin del switch

		if(edadIngresada > 59 && temperaturaCorporalIngresada > 37)
		{
			contadorPersonasTerceraEdad++;
		}

		respuesta = prompt("Desea continuar?");
	}//Fin del while


	//A) la Nacionalidad de la persona con mas temperatura.
	console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadDeLaPersonaConMasTemperatura);

	//B)Cuantos mayores de edad( más de 17) estan solteros
	if(contadorMayoresDeEdadSolteros == 0)
	{
		console.log("No se ingresaron mayores de edad solteros");
	}
	else
	{
		console.log("Se ingresaron " + contadorMayoresDeEdadSolteros + " mayores de edad solteros");
	}

	//c) La cantidad de Mujeres que hay solteras o viudas.
	if(contadorMujeresSolteras == 0)
	{
		console.log("No se ingresaron mujeres solteras");
	}
	else
	{
		console.log("Se ingresaron un total de: " + contadorMujeresSolteras + " mujeres solteras");
	}
	if(contadorMujeresViudas == 0)
	{
		console.log("No se ingresaron mujeres viudas");
	}
	else
	{
		console.log("Se ingresaron un total de: " + contadorMujeresViudas + " mujeres viudas");
	}
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	if(contadorPersonasTerceraEdad == 0)
	{
		console.log("No se ingresaron personas de la tercera edad que tengan mas de 38 de temperatura");
	}
	else
	{
		console.log("Se ingresaron " + contadorPersonasTerceraEdad + " personas de la tercera edad que tienen mas de 38 de temperatura");
	}

	//e) El promedio de edad entre las mujeres casadas.
	if(contadorMujeresCasadas == 0)
	{
		console.log("No se ingresaron mujeres casadas");
	}
	else
	{
		promedioMujeresCasadas = acumuladorMujeresCasadas / contadorMujeresCasadas;
		console.log("El promedio de edad entre las mujeres casadas es de: " + promedioMujeresCasadas);
	}

}
