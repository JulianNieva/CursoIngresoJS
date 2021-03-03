/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
Julian Leandro Nieva 1°C
Parcialito 1*/

function mostrar()
{
	let contadorDePaisesIngresados;
	let continenteIngresado;
	let nombreDelPaisIngresado;
	let cantidadDeHabitantesIngresados;
	let nivelDePobresaIngresado;
	let temperaturaIngresada;
	let contadorTemperaturasPares;
	let contadorTemperaturasImparesDeEuropa;
	let banderaDePaisConMenosHabitantes;
	let paisConMenosHabitantes;
	let cantidadDelPaisConMenosHabitantes;
	let contadorPaisesQueSuperanLos40Grados;
	let contadorPaisesDeAmericaQueTienenMenosDe0Grados;
	let habitantesDeAmerica;
	let habitantesDeAsia;
	let habitantesDeOceania;
	let habitantesDeEuropa;
	let habitantesDeAfrica;
	let promedioDeHabitantesDePaisesIngresados;
	let acumuladorDeHabitantesDePaisesQueSuperanLos40Grados;
	let contadorDeHabitantesDePaisesQueSuperanLos40Grados;
	let promedioDeHabitantesDePaisesQueSuperanLos40Grados;
	let banderaDeTemperaturaMinima;
	let paisConLaMenorTemperatura;
	let temperaturaMinima;
	let sumaDeHabitantesEnTotal;
	let acumuladorHabitantesEnTotal;
	
	habitantesDeAmerica = 0;
	habitantesDeAsia = 0;
	habitantesDeOceania = 0;
	habitantesDeEuropa = 0;
	habitantesDeAfrica = 0;
	
	banderaDeTemperaturaMinima = 0;
	banderaDePaisConMenosHabitantes = 0;
	
	acumuladorDeHabitantesDePaisesQueSuperanLos40Grados = 0;

	contadorDeHabitantesDePaisesQueSuperanLos40Grados = 0;

	contadorPaisesDeAmericaQueTienenMenosDe0Grados = 0;
	contadorPaisesQueSuperanLos40Grados = 0;
	contadorTemperaturasImparesDeEuropa = 0;
	contadorTemperaturasPares = 0;

	for(contadorDePaisesIngresados = 0; contadorDePaisesIngresados < 5; contadorDePaisesIngresados++)
	{
		continenteIngresado = prompt("Ingrese el continente");
		while(isNaN(continenteIngresado) == false || continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania")
		{
			continenteIngresado = prompt("Error. Por favor ingrese un continente valido");
		}

		nombreDeLPaisIngresado = prompt("Ingrese el pais");
		while(isNaN(nombreDeLPaisIngresado) == false)
		{
			nombreDelPaisIngresado = prompt("Error. Por favor ingrese un pais valido");
		}

		cantidadDeHabitantesIngresados = prompt("Ingrese la cantidad de habitantes.")
		cantidadDeHabitantesIngresados = parseInt(cantidadDeHabitantesIngresados);
		while(isNaN(cantidadDeHabitantesIngresados) == true || cantidadDeHabitantesIngresados < 1 || cantidadDeHabitantesIngresados > 7000)
		{
			cantidadDeHabitantesIngresados = prompt("Error. Por favor ingrese una cantidad valida. Debe ser en millones entre 1 y 7000")
			cantidadDeHabitantesIngresados = parseInt(cantidadDeHabitantesIngresados);
		}

		nivelDePobresaIngresado = prompt("Ingrese el nivel de pobresa");
		while(isNaN(nivelDePobresaIngresado) == false || (nivelDePobresaIngresado != "pobre" && nivelDePobresaIngresado != "rico" && nivelDePobresaIngresado != "muy rico") || (nivelDePobresaIngresado == "pobre" && continenteIngresado == "europa"))
		{
			nivelDePobresaIngresado = prompt("Error. Por favor ingrese un nivel de pobresa valido. Tenga en cuenta que en Europa no hay paises pobres");
		}
		
		temperaturaIngresada = prompt("Ingrese la temperatura minima.")
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < -50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada = prompt("Error. Por favor ingrese una temperatura minima, debe ser entre -50 y 50");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		if(banderaDePaisConMenosHabitantes == 0)	//c)El nombre del pais con menos habitantes
		{
			cantidadDelPaisConMenosHabitantes = cantidadDeHabitantesIngresados;
			paisConMenosHabitantes = nombreDelPaisIngresado;
			banderaDePaisConMenosHabitantes = 1;
		}
		else
		{
			if(cantidadDeHabitantesIngresados < cantidadDelPaisConMenosHabitantes)
			{
				cantidadDelPaisConMenosHabitantes = cantidadDeHabitantesIngresados;
				paisConMenosHabitantes = nombreDelPaisIngresado;
			}
		}
		
		if(banderaDeTemperaturaMinima == 0)	//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		{
			paisConLaMenorTemperatura = nombreDelPaisIngresado;
			temperaturaMinima = temperaturaIngresada;
			banderaDeTemperaturaMinima = 1;
		}
		else
		{
			if(temperaturaIngresada < temperaturaMinima)
			{
				paisConLaMenorTemperatura = nombreDelPaisIngresado;
				temperaturaMinima = temperaturaIngresada;
			}
		}

		if(temperaturaIngresada > 40)	//d)la cantidad de paises que superan los 40 grados.
		{
			acumuladorDeHabitantesDePaisesQueSuperanLos40Grados = acumuladorDeHabitantesDePaisesQueSuperanLos40Grados + cantidadDeHabitantesIngresados;
			contadorPaisesQueSuperanLos40Grados++;
		}

		if(temperaturaIngresada % 2 == 0)	//a)La cantidad de temperaturas pares.
		{
			contadorTemperaturasPares++;
		}

		switch(continenteIngresado)
		{
			case "europa":
				if(temperaturaIngresada % 2 != 0)	//b)la cantidad de temperaturas impares de europa
				{
					contadorTemperaturasImparesDeEuropa++;
				}
				habitantesDeEuropa = habitantesDeEuropa + cantidadDeHabitantesIngresados;
				break;
			case "america":
				if(temperaturaIngresada < 0)	//e)la cantidad de paises de america que tienen menos de 0 grados .
				{
					contadorPaisesDeAmericaQueTienenMenosDe0Grados++;
				}
				habitantesDeAmerica = habitantesDeAmerica + cantidadDeHabitantesIngresados;
				break;
			case "asia":
				habitantesDeAsia = habitantesDeAsia + cantidadDeHabitantesIngresados;
				break;
			case "oceania":
				habitantesDeOceania = habitantesDeOceania + cantidadDeHabitantesIngresados;
				break;
			case "africa":
				habitantesDeAfrica = habitantesDeAfrica + cantidadDeHabitantesIngresados;
				break;
		}//Fin del switch

	}//Fin del for

		//a)La cantidad de temperaturas pares.
	if(contadorTemperaturasPares == 0)
	{
		console.log("No se ingreso una temperatura par");
	}
	else
	{
		console.log("Se ingreso un total de: " + contadorTemperaturasPares + " de temperaturas pares");
	}

		//b)la cantidad de temperaturas impares de europa
	if(contadorTemperaturasImparesDeEuropa == 0)
	{
		console.log("No se ingreso una temperatura impar");
	}
	else
	{
		console.log("Se ingreso un total de: " + contadorTemperaturasImparesDeEuropa + " de temperaturas impares");
	}

		//c)El nombre del pais con menos habitantes
	console.log("El pais con menos habitantes es: " + paisConMenosHabitantes + " con un total de " + cantidadDelPaisConMenosHabitantes);

		//d)la cantidad de paises que superan los 40 grados.
	if(contadorPaisesQueSuperanLos40Grados == 0)
	{
		console.log("No se ingreso un pais que supere los 40 grados");
	}
	else
	{
		console.log("La cantidad de paises que superen los 40 grados es de:" + contadorPaisesQueSuperanLos40Grados)
	}

		//e)la cantidad de paises de america que tienen menos de 0 grados .
	if(contadorPaisesDeAmericaQueTienenMenosDe0Grados == 0)
	{
		console.log("No se ingreso una temperatura menor a 0 grados");
	}
	else
	{
		console.log("La cantidad de paises de america que tengan menos de 0 grados son en total: " + contadorPaisesDeAmericaQueTienenMenosDe0Grados);
	}

		//f)el promedio de habitantes entre los paises ingresados.
	sumaDeHabitantesEnTotal = habitantesDeOceania + habitantesDeAfrica + habitantesDeAmerica + habitantesDeAsia + habitantesDeEuropa;
	promedioDeHabitantesDePaisesIngresados = sumaDeHabitantesEnTotal / contadorDePaisesIngresados;
	console.log("El promedio total de habitantes de todos los paises ingresados es de: " + promedioDeHabitantesDePaisesIngresados + "millones")

		//g)el promedio de habitantes entre los paises que superan los 40 grados  
	if(contadorPaisesQueSuperanLos40Grados == 0)
	{
		console.log("No se ingreso un pais con temperatura mayor a 40 grados");
	}
	else
	{
		promedioDeHabitantesDePaisesQueSuperanLos40Grados = acumuladorDeHabitantesDePaisesQueSuperanLos40Grados / contadorPaisesQueSuperanLos40Grados;
		console.log("Los promedio de habitantes entre los paises que superan los 40 grados es de: " + promedioDeHabitantesDePaisesQueSuperanLos40Grados);
	}

		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	console.log("El pais con la minima temperatura es: " + paisConLaMenorTemperatura + " con un temperatura de: " + temperaturaMinima);

		//i) que continente tiene mas habitantes.
	if(habitantesDeEuropa > habitantesDeAmerica && habitantesDeEuropa > habitantesDeAfrica && habitantesDeEuropa > habitantesDeAsia && habitantesDeEuropa > habitantesDeOceania)
	{
		console.log("El pais con mas habitantes es Europa con un total de: " + habitantesDeEuropa + " habitantes");
	}
	else
	{
		if(habitantesDeAmerica > habitantesDeAfrica && habitantesDeAmerica > habitantesDeAsia && habitantesDeAmerica > habitantesDeOceania)
		{
			console.log("El pais con mas habitantes es America con un total de: " + habitantesDeAmerica + " habitantes");
		}
		else
		{
			if(habitantesDeAsia > habitantesDeOceania && habitantesDeAsia > habitantesDeAfrica)
			{
				console.log("El pais con mas habitantes es Asia con un total de: " + habitantesDeAsia + " habitantes");
			}
			else
			{
				if(habitantesDeAfrica > habitantesDeOceania)
				{
					console.log("El pais con mas habitantes es Africa con un total de: " + habitantesDeAfrica + " habitantes");
				}
				else
				{
					console.log("El pais con mas habitantes es Oceania con un total de: " + habitantesDeOceania + " habitantes");
				}
			}
		}
	}
}//FIN DE LA FUNCIÓN