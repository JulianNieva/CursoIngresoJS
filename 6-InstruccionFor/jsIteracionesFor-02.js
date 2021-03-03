/*validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
Julian Leandro Nieva 1°C
Extra 3*/

function mostrar()
{
	let tipoIngresado;
	let razaIngresada;
	let edadIngresada;
	let nombreIngresado;
	let gatoMasViejo;
	let edadGatoMasViejo;
	let perroMasViejo;
	let edadPerroMasViejo;
	let pajaroMasViejo;
	let edadPajaroMasViejo;
	let otrosMasViejo;
	let edadOtrosMasViejo;
	let banderaGato;
	let banderaPerro;
	let banderaPajaro;
	let banderaOtros;
	let contadorGatoSiames;
	let contadorGatoTurco;
	let contadorGatoPeterbald;
	let contadorGatoGenerico;
	let acumuladorGatoSiames;
	let acumuladorGatoTurco;
	let acumuladorGatoPeterbald;
	let acumuladorGatoGenerico;
	let promedioGatos;

	contadorGatoSiames = 0;
	contadorGatoTurco = 0;
	contadorGatoPeterbald = 0;
	contadorGatoGenerico = 0;
	acumuladorGatoSiames = 0;
	acumuladorGatoTurco = 0;
	acumuladorGatoPeterbald = 0;
	acumuladorGatoGenerico = 0;

	banderaGato = 0;
	banderaPerro = 0;
	banderaPajaro = 0;
	banderaOtros = 0;

	for(contadorDeIngreso = 0; contadorDeIngreso < 10 ; contadorDeIngreso++)
	{
		tipoIngresado = prompt("Ingrese el tipo de mascota");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "pajaro" && tipoIngresado != "otros")
		{
			tipoIngresado = prompt("Error. Por favor ingrese el tipo de mascota");
		}

		razaIngresada = prompt("Ingrese la raza de la mascota");
		while(isNaN(razaIngresada) == false || (tipoIngresado !="gato" || (razaIngresada != "siamés" && razaIngresada != "turco" && razaIngresada != "Peterbald" && razaIngresada != "generico")) && (tipoIngresado !="perro" || (razaIngresada != "pastor" && razaIngresada != "toy" && razaIngresada != "callejero")))
		{
			razaIngresada = prompt("Error. Por favor ingrese una raza valida");
		}

		edadIngresada = prompt("Ingrese una edad de la mascota (entre 1 y 20 para gatos y perros ,  para otros entre 1 y 100 , para pájaro 1 de 50)");
		edadIngresada = parseInt (edadIngresada);
		while(isNaN(edadIngresada) == true || (tipoIngresado != "gato" || (edadIngresada < 1 || edadIngresada > 20)) || (tipoIngresado != "perro" && (edadIngresada < 1 || edadIngresada > 20)) || (tipoIngresado != "otros" && (edadIngresada < 1 || edadIngresada > 100)) || (tipoIngresado != "pajaro" && (edadIngresada < 1 || edadIngresada > 50))) 
		{
			edadIngresada = prompt("Error. Por favor una edad valida");
		}

		nombreIngresado = prompt("Ingrese el nombre de la mascota");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Por favor ingrese un nombre valido");
		}

		switch(tipoIngresado)
		{
			case "gato":
				if(banderaGato == 0)
				{
					edadGatoMasViejo = edadIngresada;
					gatoMasViejo = nombreIngresado;
					banderaGato = 1;
				}
				else
				{
					if(edadIngresada > edadGatoMasViejo)
					{
						edadGatoMasViejo = edadIngresada;
						gatoMasViejo = nombreIngresado;
					}
				}
				switch(razaIngresada)
				{
					case "siames":
						contadorGatoSiames++;
						acumuladorGatoSiames = acumuladorGatoSiames + edadIngresada;
						break;
					case "turco":
						contadorGatoTurco++;
						acumuladorGatoTurco = acumuladorGatoTurco + edadIngresada;
						break;
					case "peterbald":
						contadorGatoPeterbald++;
						acumuladorGatoPeterbald = acumuladorGatoPeterbald + edadIngresada;
						break;
					case "generico":
						contadorGatoGenerico++;
						acumuladorGatoGenerico = acumuladorGatoGenerico + edadIngresada;
						break;
				}	//Fin del switch de raza del gato
				break;
			case "perro":
				if(banderaPerro == 0)
				{
					edadPerroMasViejo = edadIngresada;
					perroMasViejo = nombreIngresado;
					banderaPerro = 1;
				}
				else
				{
					if(edadIngresada > edadPerroMasViejo)
					{
						edadPerroMasViejo = edadIngresada;
						perroMasViejo = nombreIngresado;
					}
				}
				break;
			case "pajaro":
				if(banderaPajaro == 0)
				{
					edadPajaroMasViejo = edadIngresada;
					pajaroMasViejo = edadPajaroMasViejo;
					banderaPajaro = 1;
				}
				else
				{
					if(edadIngresada > edadPajaroMasViejo)
					{
						edadPajaroMasViejo = edadIngresada;
						pajaroMasViejo = edadPajaroMasViejo;
					}
				}
				break;
			case "otros":
				if(banderaOtros == 0)
				{
					edadOtrosMasViejo = edadIngresada;
					otrosMasViejo = nombreIngresado;
					banderaOtros = 1;
				}
				else
				{
					if(edadIngresada > edadOtrosMasViejo)
					{
						edadOtrosMasViejo = edadIngresada;
						otrosMasViejo = nombreIngresado;
					}
				}
				break;
		}//Fin del swtich de tipo de mascotas ingresadas
	}//Fin del for

	//mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
	if(banderaGato == 0)
	{
		console.log("No se ingresaron Gatos");
	}
	else	//mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
	{
		console.log("El nombre del gato mas viejo es: " + gatoMasViejo);
		if(contadorGatoGenerico > contadorGatoPeterbald && contadorGatoGenerico > contadorGatoSiames && contadorGatoGenerico > contadorGatoTurco)
		{
			promedioGatos = acumuladorGatoGenerico / contadorGatoGenerico;
			console.log("La raza de gatos con mas animales es Generico con un promedio de edad de: " + promedioGatos);
		}
		else
		{
			if(contadorGatoPeterbald > contadorGatoTurco && contadorGatoPeterbald > contadorGatoSiames)
			{
				promedioGatos = acumuladorGatoPeterbald / contadorGatoPeterbald;
				console.log("La raza de gatos con mas animales es Peterbald con un promedio de edad de: " + promedioGatos);
			}
			else
			{
				if(contadorGatoTurco > contadorGatoSiames)
				{
					promedioGatos = acumuladorGatoTurco / contadorGatoTurco;
					console.log("La raza de gatos con mas animales es Turco con un promedio de edad de: " + promedioGatos);

				}
				else
				{
					promedioGatos = acumuladorGatoSiames / contadorGatoSiames;
					console.log("La raza de gatos con mas animales es Siames con un promedio de edad de: " + promedioGatos);
				}
			}
		}
	}
	
	if(banderaOtros == 0)
	{
		console.log("No se ingresaron Otros");
	}
	else
	{
		console.log("El nombre de otros mas viejo es: " + otrosMasViejo);
	}

	if(banderaPerro == 0)
	{
		console.log("No se ingresaron Perros");
	}
	else
	{
		console.log("El nombre del Perro mas viejo es: " + perroMasViejo);
	}

	if(banderaPajaro == 0)
	{
		console.log("No se ingresaron Pajaros");
	}
	else
	{
		console.log("El nombre del Pajaro mas viejo es: " + pajaroMasViejo);
	}
}// Fin de la funcion