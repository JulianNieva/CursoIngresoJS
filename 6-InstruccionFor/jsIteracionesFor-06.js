/*For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), 
altura(rangos que quiera)) ... informar el sexo y nombre de la persona mas alta
For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay
For 13 ( o anterior mas ...el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, 
la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
Julian Leandro Nieva 1°C
Ejercicio 13 for*/

function mostrar()
{
		//Establezco variables
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada;
	let contadorPersonasIngresadas;
	let banderaPersonaMasAlta;
	let nombreDeLaPersonaMasAlta;
	let sexoDeLaPersonaMasAlta;
	let alturaDeLaPersonasMasAlta;
	let nombreDeMujerMasJoven;
	let edadMujerMasJoven;
	let banderaMujerMasJoven;
	let nombreDeHombreMasBajito;
	let alturaDeHombreMasBajito;
	let banderaDeHombreMasBajito;
	let acumuladorDeEdadesHombres;
	let contadorDeEdadesHombres;
	let promedioDeEdadesHombres;
	let acumuladorDeEdadesMujeres;
	let contadorDeEdadesMujeres;
	let promedioDeEdadesMujeres;
	const ALTURAMEDIA = 160;	//La constante de la altura de 160 CM
	let contadorDePersonasConAlturaMedia;
	let porcentajeDeMujeres;
	let mujeresQueMidenMasDeAlturaMedia;

	contadorDePersonasConAlturaMedia = 0;

	mujeresQueMidenMasDeAlturaMedia = 0;

	acumuladorDeEdadesHombres = 0;
	contadorDeEdadesHombres = 0;

	acumuladorDeEdadesMujeres = 0;
	contadorDeEdadesMujeres = 0;

	banderaMujerMasJoven = 0;
	banderaDeHombreMasBajito = 0;
	banderaPersonaMasAlta = 0;

	for(contadorPersonasIngresadas = 0; contadorPersonasIngresadas < 5; contadorPersonasIngresadas++)	//Se inicia el for
	{
		nombreIngresado= prompt("Ingrese el nombre de la persona");	//Se le solicita al usuario que ingrese el nombre y se valida
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado= prompt("Error. Por favor ingrese un nombre valido");
		}

		sexoIngresado = prompt("Ingrese el sexo de la persona");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "masculino" && sexoIngresado != "femenino")
		{
			sexoIngresado= prompt("Error. Por favor un sexo valido, debe ser masculino o femenino");
		}

		edadIngresada = prompt("Ingrese la edad de la persona");	//Se le solicita al usuario que ingrese una edad y se valida
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || (edadIngresada > 12 || edadIngresada < 1) && sexoIngresado == "masculino" || sexoIngresado == "femenino" && (edadIngresada < 13 || edadIngresada > 18))
		{
			edadIngresada = prompt("Error. Por favor ingrese una edad valida");
			edadIngresada = parseInt(edadIngresada);
		}

		alturaIngresada = prompt("Ingrese la altura de la persona en CM");	//Se le solicita al usuario que ingrese una altura y se valida
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada < 100 || alturaIngresada > 250)
		{
			alturaIngresada = prompt("Error. Por favor ingrese una altura valida");
			alturaIngresada = parseInt(alturaIngresada);
		}
		
		if(banderaPersonaMasAlta == 0)	//Se inicializa comprueba la persona con mas altura
		{
			sexoDeLaPersonaMasAlta = sexoIngresado;
			nombreDeLaPersonaMasAlta = nombreIngresado;
			alturaDeLaPersonasMasAlta = alturaIngresada;
			banderaPersonaMasAlta = 1;
		}
		else
		{
			if(alturaIngresada > alturaDeLaPersonasMasAlta)
			{
				sexoDeLaPersonaMasAlta = sexoIngresado;
				nombreDeLaPersonaMasAlta = nombreIngresado;
				alturaDeLaPersonasMasAlta = alturaIngresada;
			}
		}
		
		if (alturaIngresada > ALTURAMEDIA)  //Se comprueba si la altura ingresada es mayor a la constante
		{
			contadorDePersonasConAlturaMedia++;
		}

		switch(sexoIngresado)	//Se inicia un switch y se analiza
		{
			case "masculino":
			if(banderaDeHombreMasBajito == 0)
			{
				nombreDeHombreMasBajito = nombreIngresado;
				alturaDeHombreMasBajito = alturaIngresada;
				banderaDeHombreMasBajito = 1;
			}
			else
			{
				if(alturaIngresada < alturaDeHombreMasBajito)
				{
					nombreDeHombreMasBajito = nombreIngresado;
					alturaDeHombreMasBajito = alturaIngresada;
				}
			}
			acumuladorDeEdadesHombres = acumuladorDeEdadesHombres + edadIngresada;
			contadorDeEdadesHombres++;
			break;
			case "femenino":
				if(banderaMujerMasJoven == 0)
				{
					nombreDeMujerMasJoven = nombreIngresado;
					edadMujerMasJoven = edadIngresada;
					banderaMujerMasJoven = 1;
				}
				else
				{
					if(edadIngresada < edadMujerMasJoven)
					{
						nombreDeMujerMasJoven = nombreIngresado;
						edadMujerMasJoven = edadIngresada;
					}
				}
				
				if (alturaIngresada > ALTURAMEDIA)  //Se Comprueba si se ingreso una altura mayor a la ALTURAMEDIA
				{
					mujeresQueMidenMasDeAlturaMedia++;
				}
				acumuladorDeEdadesMujeres = acumuladorDeEdadesMujeres + edadIngresada;
				contadorDeEdadesMujeres++;
				break;
			
		}
	} //Fin del for

	if(contadorDePersonasConAlturaMedia == 0)
	{
		console.log("No hay una persona mayor a 160 CM");
	}
	else
	{
		console.log("La cantidad de personas mayores a 160 CM es de: " + contadorDePersonasConAlturaMedia);
	}	
	if(banderaDeHombreMasBajito == 0)	//Comprueba si se ingresaron hombres
	{
		console.log("No se ingresaron hombres");
	}
	else
	{
		promedioDeEdadesHombres = acumuladorDeEdadesHombres / contadorDeEdadesHombres;
		console.log("El promedio de edades entre hombres es de: " + promedioDeEdadesHombres);
		console.log("El nombre del hombre mas bajito es: " + nombreDeHombreMasBajito + " con una altura de: " + alturaDeHombreMasBajito);
	}
	if(banderaMujerMasJoven == 0)	//Comprueba si se ingresaron mujeres
	{
		console.log("No se ingresaron mujeres")
	}
	else
	{
		porcentajeDeMujeres = mujeresQueMidenMasDeAlturaMedia * 100 / contadorDePersonasConAlturaMedia;
		console.log("El porcentaje de mujeres sobre el total de personas que miden mas de 160CM es de: " + porcentajeDeMujeres + "%");
		promedioDeEdadesMujeres = acumuladorDeEdadesMujeres / contadorDeEdadesMujeres;
		console.log("El promedio de edades entre mujeres es de: " + promedioDeEdadesMujeres);
		console.log ("El nombre de la mujer mas joven es: " + nombreDeMujerMasJoven + " con una edad de: " + edadMujerMasJoven);
	}

	console.log("El sexo de la persona mas alta es: " + sexoDeLaPersonaMasAlta + ", y su nombre es: " + nombreDeLaPersonaMasAlta);
	
}//FIN DE LA FUNCIÓN