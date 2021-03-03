/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
Julian Leandro Nieva 1°C
Parcialito 2*/

function mostrar()
{
	let tipoDeMascota;
	let tipoDePelaje;
	let edadDeLaMascota;
	let nombreDeLaMascota;
	let razaIngresada;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorporal;
	let respuesta;
	let pesoDelPerroMasPesado;
	let porcentajeEnfermos;
	let contadorEnfermos;
	let contadorPerros;
	let contadorGatos;
	let contadorOtraCosa;
	let sumaTotalDeMascotasIngresados;
	let ultimaMascotaOtraCosa;
	let temperaturaMenorAnimalSinPelo;
	let animalSinPeloConMenorTemperatura;
	let banderaAnimalSinPeloConMenorTemperatura;
	let temperaturaCorporalGatos;
	let temperaturaCorporalPerros;
	let temperaturaCorporalOtraCosa;
	let acumuladorTemperaturaCorporalGatos;
	let acumuladorTemperaturaCorporalPerros;
	let acumuladorTemperaturaCorporalOtraCosa;
	let promedioTemperaturaGatos;
	let promedioTemperaturaPerros;
	let promedioTemperaturaOtraCosa;
	let porcentajeSumaGatosYPerros;
	let sumaTotalDePerrosYGatos;
	let contadorInternado;
	let contadorAdopcion;
	let acumuladorPesoPerros;
	let acumuladorPesoGatos;
	let acumuladorPesoOtraCosa;
	let sumaPesoTodasLasMascotas;
	let contadorPesoIngresado;
	let promedioPesoTotal;
	let banderaGatoSinPeloMasLiviano;
	let nombreDeGatoSinPeloMasLiviano;
	let razaDeGatoSinPeloMasLiviano;
	let pesoDeGatoSinPeloMasLiviano;

	acumuladorPesoPerros = 0;
	acumuladorPesoGatos = 0;
	acumuladorPesoOtraCosa = 0;

	contadorPesoIngresado = 0;

	contadorEnfermos = 0;
	contadorInternado = 0;
	contadorAdopcion = 0;

	acumuladorTemperaturaCorporalGatos = 0;
	acumuladorTemperaturaCorporalPerros = 0;
	acumuladorTemperaturaCorporalOtraCosa = 0;
	
	contadorPerros = 0;
	contadorGatos = 0;
	contadorOtraCosa = 0;

	banderaGatoSinPeloMasLiviano = 0;
	banderaAnimalSinPeloConMenorTemperatura = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		tipoDeMascota = prompt("Ingrese el tipo de mascota (gato, perro u otra cosa)");
		while(isNaN(tipoDeMascota) == false || tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otra cosa")
		{
			tipoDeMascota = prompt("Error. Por favor ingrese una mascota valida");
		}

		tipoDePelaje = prompt("Ingrese el tipo de pelaje (corto, largo o sin pelo)");
		while(isNaN(tipoDePelaje) == false || tipoDePelaje != "corto" && tipoDePelaje != "largo" && tipoDePelaje != "sin pelo")
		{
			tipoDePelaje = prompt("Error. Por favor ingrese un pelaje valido");
		}

		edadDeLaMascota = prompt("Ingrese la edad de la mascota");
		edadDeLaMascota = parseInt(edadDeLaMascota);
		while(isNaN(edadDeLaMascota) == true)
		{
			edadDeLaMascota = prompt("Error. Por favor ingrese una edad valida");
			edadDeLaMascota = parseInt(edadDeLaMascota);
		}

		nombreDeLaMascota = prompt("Ingrese el nombre de la mascota");
		while(isNaN(nombreDeLaMascota) == false)
		{
			nombreDeLaMascota = prompt("Error. Por favor ingrese un nombre valido");
		}

		razaIngresada = prompt("Ingrese la raza de la mascota");
		while(isNaN(razaIngresada) == false)
		{
			razaIngresada = prompt("Error. Por favor ingrese una raza valida");
		}

		pesoIngresado = prompt("Ingrese el peso de la mascota");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) == true)
		{
			pesoIngresado = prompt("Error. Por favor ingrese un peso valido");
			pesoIngresado = parseInt(pesoIngresado);
		}

		estadoClinicoIngresado = prompt("Ingrese el tipo de mascota (enfermo, internado o adopcion)");
		while(isNaN(estadoClinicoIngresado) == false || estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion")
		{
			estadoClinicoIngresado = prompt("Error. Por favor ingrese un estado clinico valida");
		}

		temperaturaCorporal = prompt("Ingrese la temperatura de la mascota");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal) == true)
		{
			temperaturaCorporal = prompt("Error. Por favor ingrese una temperatura valida");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		if(tipoDePelaje == "sin pelo")
		{
			if(banderaAnimalSinPeloConMenorTemperatura == 0)
			{
				animalSinPeloConMenorTemperatura = tipoDeMascota;
				temperaturaMenorAnimalSinPelo = temperaturaCorporal;
			}
			else
			{
				if(temperaturaCorporal < temperaturaMenorAnimalSinPelo)
				{
					animalSinPeloConMenorTemperatura = tipoDeMascota;
					temperaturaMenorAnimalSinPelo = temperaturaCorporal;
				}
			}
		}

		switch(estadoClinicoIngresado)
		{
			case "adopcion":
				contadorAdopcion++;
				break;
			case "enfermo":
				contadorEnfermos++;
				break;
			case "internado":
				contadorInternado++;
				break;
		}	//Fin del switch estado clinico
		
		switch(tipoDeMascota)
		{
			case "perro":
				if(contadorPerros == 0)
				{
					pesoDelPerroMasPesado = pesoIngresado;
				}
				else
				{
					if(pesoIngresado > pesoDelPerroMasPesado)
					{
						pesoDelPerroMasPesado = pesoIngresado;
					}
				}
				acumuladorTemperaturaCorporalPerros = acumuladorTemperaturaCorporalPerros + temperaturaCorporal;
				acumuladorPesoPerros = acumuladorPesoPerros + pesoIngresado;
				contadorPerros++;
				break;
			case "gato":
				if(tipoDePelaje == "sin pelo")
				{
					if(banderaGatoSinPeloMasLiviano == 0)
					{
						banderaGatoSinPeloMasLiviano = 1;
						pesoDeGatoSinPeloMasLiviano = pesoIngresado;
						nombreDeGatoSinPeloMasLiviano = nombreDeLaMascota;
						razaDeGatoSinPeloMasLiviano = razaIngresada;

					}
					else
					{
						if(pesoIngresado < pesoDeGatoSinPeloMasLiviano)
						{
							pesoDeGatoSinPeloMasLiviano = pesoIngresado;
							nombreDeGatoSinPeloMasLiviano = nombreDeLaMascota;
							razaDeGatoSinPeloMasLiviano = razaIngresada;
	
						}
					}
				}
				acumuladorTemperaturaCorporalGatos = acumuladorTemperaturaCorporalGatos + temperaturaCorporal;
				acumuladorPesoGatos = acumuladorPesoGatos + pesoIngresado;
				contadorGatos++;
				break;
			case "otra cosa":
				acumuladorTemperaturaCorporalOtraCosa = acumuladorTemperaturaCorporalOtraCosa + temperaturaCorporal;
				ultimaMascotaOtraCosa = nombreDeLaMascota;
				contadorOtraCosa++;
				acumuladorPesoOtraCosa = acumuladorPesoOtraCosa + pesoIngresado;
				break;
		}	//Fin del switch tipo de mascota
		
		contadorPesoIngresado++;

		respuesta = prompt("Desea continuar?");
	}	//Fin del while

	promedioTemperaturaGatos = acumuladorTemperaturaCorporalGatos / contadorGatos;
	promedioTemperaturaOtraCosa = acumuladorTemperaturaCorporalOtraCosa / contadorGatos;
	promedioTemperaturaPerros = acumuladorTemperaturaCorporalPerros / contadorPerros;

	sumaTotalDeMascotasIngresados = contadorOtraCosa + contadorGatos + contadorPerros;

	//a)El perro mas pesado
	if(contadorPerros == 0)
	{
		console.log("No se ingresaron perros");
	}
	else
	{
		console.log("El perro mas pesado tiene un peso de: " + pesoDelPerroMasPesado);
	}
	//B)El porcentaje de enfermos sobre el total de mascotas
	if(contadorEnfermos == 0)
	{
		console.log("No se ingresaron animales enfermos");
	}
	else
	{
		porcentajeEnfermos = contadorEnfermos * 100 / sumaTotalDeMascotasIngresados;
		console.log("El porcentaje de animales enfermos ingresados es de: " + porcentajeEnfermos + "%");
	}

	//C)El nombre de la ultima mascota de tipo "otra cosa"
	if(contadorOtraCosa == 0)
	{
		console.log("No se ingresaron mascotas de otra cosa");
	}
	else
	{
		console.log("El nombre de la ultima mascota de tipo otra cosa es: " + ultimaMascotaOtraCosa);
	}

	//D)El animal sin pelo con menor temperatura corporal
	if(banderaAnimalSinPeloConMenorTemperatura == 0)
	{
		console.log("No se ingresaron animales sin pelo");
	}
	else
	{
		console.log("El animal sin pelo con menor temperatura corporal es: " + animalSinPeloConMenorTemperatura);
	}

	//E)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
	if(promedioTemperaturaGatos > promedioTemperaturaOtraCosa && promedioTemperaturaGatos > promedioTemperaturaPerros)
	{
		console.log("La mascota que tiene el mayor promedio de temperatura corporal son los gatos");
	}
	else
	{
		if(promedioTemperaturaPerros > promedioTemperaturaOtraCosa)
		{
			console.log("La mascota que tiene el mayor promedio de temperatura corporal son los perros");
		}
		else
		{
			console.log("La mascota que tiene el mayor promedio de temperatura corporal es otra cosa");
		}
	}

	//F)Sumando gatos y perros que porcentaje del total de mascotas son?
	if(contadorPerros == 0 && contadorGatos == 0)
	{ 
		console.log("No se ingresaron perros ni gatos");
	}
	else
	{
		sumaTotalDePerrosYGatos = contadorGatos + contadorPerros;
		porcentajeSumaGatosYPerros = sumaTotalDePerrosYGatos * 100 / sumaTotalDeMascotasIngresados;
		console.log("El porcentaje de la suma entre gatos y perros sobre el total de mascotas son: " + porcentajeSumaGatosYPerros); 
	}
	//G)Que estado clinico tiene la menor cantidad de mascotas  
	if(contadorEnfermos < contadorInternado && contadorEnfermos < contadorAdopcion)
	{
		console.log("El estado clinico que tiene la menor cantidad de mascotas es Enfermos");
	}
	else
	{
		if(contadorInternado < contadorAdopcion)
		{
			console.log("El estado clinico que tiene la menor cantidad de mascotas es Internado");
		}
		else
		{
			console.log("El estado clinico que tiene la menor cantidad de mascotas es Adopcion");
		}
	}
	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	
	sumaPesoTodasLasMascotas = acumuladorPesoGatos + acumuladorPesoOtraCosa + acumuladorPesoPerros;
	promedioPesoTotal = sumaPesoTodasLasMascotas / contadorPesoIngresado;
	console.log("El promedio de kilos de peso de todas las mascotas es de: " + promedioPesoTotal + "KG");
	
	//i)El nombre y raza del gato sin pelos mas liviano
	if(banderaGatoSinPeloMasLiviano == 0)
	{
		console.log("No se ingresaron gatos sin pelos");
	}
	else
	{
		console.log("El nombre del gato sin pelos mas liviano es: " + nombreDeGatoSinPeloMasLiviano + " y su raza es: " + razaDeGatoSinPeloMasLiviano);
	}
}//FIN DE LA FUNCIÓN