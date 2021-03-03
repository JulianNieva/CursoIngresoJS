/*2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
Julian Leandro Nieva 1°C
Extra 2 chino*/

function mostrar()
{
	let tipodeProductoIngresado;
	let nombreDelProductoIngresado;
	let importeDelProductoIngresado;
	let procedenciaIngresado;
	let pesoIngresado;
	let respuesta;
	let nombreDelMasPesadoDeLosComestibles;
	let pesoDelComestibleMasPesado;
	let banderaDelProductoMasCaro;
	let nombreDelProductoMasCaro;
	let precioDelProductoMasCaro;
	let banderaDelProductoMasBaratoDeLosElaborados;
	let nombreDelProductoMasBaratoDeLosElaborados;
	let precioDelProductoMasBaratoDeLosElaborados;
	let contadorDeComestibles;
	let contadorDeLimpieza;
	let contadorDeOtros;
	let acumuladorDePesoComestibles;
	let acumuladorDePesoLimpieza;
	let acumuladorDePesoOtros;
	let sumaPesoDeProductosEnTotal;
	let promedioDePesoTotal;
	let porcentajeDeProductosElaborados;
	let contadorProductosElaborados;
	let sumaDeCantidadDeProductosIngresadosEnTotal;

	contadorProductosElaborados = 0;

	acumuladorDePesoComestibles = 0;
	acumuladorDePesoLimpieza = 0;
	acumuladorDePesoOtros = 0;

	banderaDelProductoMasBaratoDeLosElaborados  = 0;
	banderaDelProductoMasCaro = 0;

	contadorDeComestibles = 0;
	contadorDeLimpieza = 0;
	contadorDeOtros = 0;

	respuesta = "si"

	while(respuesta == "si")
	{
		tipodeProductoIngresado = prompt("Ingrese el tipo de producto (limpieza , comestible , otros)");
		while(isNaN(tipodeProductoIngresado) == false || tipodeProductoIngresado != "limpieza" && tipodeProductoIngresado != "comestible" && tipodeProductoIngresado != "otros")
		{
			tipodeProductoIngresado = prompt("Error. Por favor ingrese un producto valido");
		}

		nombreDelProductoIngresado = prompt("Ingrese el nombre del producto");
		while(isNaN(nombreDelProductoIngresado) == false)
		{
			nombreDelProductoIngresado = prompt("Error. Por favor ingrese un nombre valido");
		}

		importeDelProductoIngresado = prompt("Ingrese el importe del producto. No debe superar 1000 pesos");
		importeDelProductoIngresado = parseInt (importeDelProductoIngresado);
		while(isNaN(importeDelProductoIngresado) == true || importeDelProductoIngresado < 1 || importeDelProductoIngresado > 1000)
		{
			importeDelProductoIngresado = prompt("Error. Por favor ingrese un precio valido");
			importeDelProductoIngresado = parseInt (importeDelProductoIngresado);
		}

		procedenciaIngresado = prompt("Ingrese la procedencia del producto (importado, nacional, elaborado)");
		while(isNaN(procedenciaIngresado) == false || procedenciaIngresado != "importado" && procedenciaIngresado != "nacional" && procedenciaIngresado != "elaborado")
		{
			procedenciaIngresado = prompt("Error. Por favor una procedencia valida");
		}

		pesoIngresado = prompt("Ingrese el peso del producto. No debe ser mayor a los 30 kilos");
		pesoIngresado = parseInt (pesoIngresado);
		while(isNaN(pesoIngresado) == true || pesoIngresado < 1 || pesoIngresado > 30)
		{
			pesoIngresado = prompt("Error. Por favor ingrese un peso valido");
			pesoIngresado = parseInt (pesoIngresado);
		}

		if(banderaDelProductoMasCaro == 0)	//b) el NOMBRE del  mas caro de todos los productos
		{
			nombreDelProductoMasCaro = nombreDelProductoIngresado;
			precioDelProductoMasCaro = importeDelProductoIngresado;
			banderaDelProductoMasCaro = 1;
		}
		else
		{
			if(importeDelProductoIngresado > precioDelProductoMasCaro)	
			{
				nombreDelProductoMasCaro = nombreDelProductoIngresado;
				precioDelProductoMasCaro = importeDelProductoIngresado;
			}
		}

		if(procedenciaIngresado == "elaborado")
		{ 
			contadorProductosElaborados++;
			if(banderaDelProductoMasBaratoDeLosElaborados == 0)	//c) el NOMBRE del  mas barato de los elaborados
			{
				nombreDelProductoMasBaratoDeLosElaborados = nombreDelProductoIngresado;
				precioDelProductoMasBaratoDeLosElaborados = importeDelProductoIngresado;
				banderaDelProductoMasBaratoDeLosElaborados = 1;
				
			}
			else
			{
				if(importeDelProductoIngresado < precioDelProductoMasBaratoDeLosElaborados)
				{
					nombreDelProductoMasBaratoDeLosElaborados = nombreDelProductoIngresado;
					precioDelProductoMasBaratoDeLosElaborados = importeDelProductoIngresado;
				}
			}
		}

		switch(tipodeProductoIngresado)
		{
			case "comestible":
				if(contadorDeComestibles == 0)	//a) el NOMBRE del mas pesado de los comestibles
				{
					nombreDelMasPesadoDeLosComestibles = nombreDelProductoIngresado;
					pesoDelComestibleMasPesado = pesoIngresado;
				}
				else
				{
					if(pesoIngresado > pesoDelComestibleMasPesado)
					{
						nombreDelMasPesadoDeLosComestibles = nombreDelProductoIngresado;
						pesoDelComestibleMasPesado = pesoIngresado;
					}
				}
				contadorDeComestibles++;
				acumuladorDePesoComestibles = acumuladorDePesoComestibles + pesoIngresado;
				break;
			case "limpieza":
				acumuladorDePesoLimpieza = acumuladorDePesoLimpieza + pesoIngresado;
				break;
			case "otros":
				acumuladorDePesoOtros = acumuladorDePesoOtros + pesoIngresado;
				break;
		}//Fin del switch

		respuesta = prompt("Desea continuar?");
	}	//Fin del while

	//a) el NOMBRE del mas pesado de los comestibles
	if(contadorDeComestibles == 0)
	{
		console.log("No se ingresaron productos comestibles");
	}
	else
	{
		console.log(" El nombre del producto mas pesado de los comestibles es: " + nombreDelMasPesadoDeLosComestibles);
	}

	//B) el NOMBRE del  mas caro de todos los productos
	console.log("El nombre del producto mas caro de todos los productos es: " + nombreDelProductoMasCaro);

	//C) el NOMBRE del  mas barato de los elaborados
	if(banderaDelProductoMasBaratoDeLosElaborados == 0)
	{
		console.log("No se ingresaron productos elaborados");
	}
	else
	{
		console.log("El nombre del producto mas barato de los elaborados es: " + nombreDelProductoMasBaratoDeLosElaborados);
	}

	//D)el tipo de mercadería que mas aparece
	if(contadorDeComestibles > contadorDeLimpieza && contadorDeComestibles > contadorDeOtros)
	{
		console.log("El tipo de mercaderia que mas aparece son los Comestibles");
	}
	else
	{
		if(contadorDeLimpieza > contadorDeOtros)
		{
			console.log("El tipo de mercaderia que mas aparece son los de Limpieza");
		}
		else
		{
			console.log("El tipo de mercaderia que mas aparece son Otros");
		}
	}

	//E)el porcentaje de productos elaborados por sobre el total
	sumaDeCantidadDeProductosIngresadosEnTotal = contadorDeComestibles + contadorDeOtros + contadorDeLimpieza;
	porcentajeDeProductosElaborados = sumaDeCantidadDeProductosIngresadosEnTotal / contadorProductosElaborados * 100;
	console.log("El porcentaje de productos elaborados es de: " + porcentajeDeProductosElaborados);

	//F) el promedio de pesos por cada tipo ingresado
	sumaPesoDeProductosEnTotal = acumuladorDePesoComestibles + acumuladorDePesoLimpieza + acumuladorDePesoOtros;
	promedioDePesoTotal = sumaPesoDeProductosEnTotal / 3;
	console.log("El promedio de pesos por cada tipo ingresado es de: " + promedioDePesoTotal);
}//FIN DE LA FUNCIÓN