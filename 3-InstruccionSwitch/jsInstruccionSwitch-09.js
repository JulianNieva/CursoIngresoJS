/* Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento

Julian Leandro Nieva 1°C
*/

function mostrar()
{
	let estacionIngresada; 
	let destinoIngresado; 
	let precioFinal;
	let aumento;
	let descuento;
	const PRECIO = 15000; //Establezco la constante del precio

		//Toma los valores de ID
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
		
		//Establezco el valor del aumento y descuento para las lineas 67 y 73 del codigo
	aumento = 0;
	descuento = 0;
	
	switch (estacionIngresada)
	{
		case "Invierno": //Si el usuario inserta como ID Invierno, se ejecuta este codigo
			if (destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if (destinoIngresado == "Cordoba" || destinoIngresado == "Cataratas")
				{
					descuento = 10;
				}

				else
				{
					descuento = 20;
				}
			}
			break;
		case "Verano":	//Si el usuario inserta como ID Verano, se ejecuta este codigo
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
				{
					aumento = 10;
				}
			
				else
				{
					aumento = 20;
				}
			}
			break;
		case "Otoño":
		case "Primavera":	//Si el usuario inserta como ID Otoño o Primavera, se ejecuta este codigo
			if(destinoIngresado == "Cordoba")
			{
				precioFinal = PRECIO;
			}
			else
			{
				aumento = 10;
			}
			break;
	}
		
	if (aumento != 0)	//Se comprueba de si el aumento es diferente a 0 (previamente establecido en la linea 17)
		{
			precioFinal = PRECIO + PRECIO * aumento / 100;
		}

		else
			if(descuento != 0)	//Se comprueba de si el descuento es diferente a 0 (previamente establecido en la linea 18)
			{
				precioFinal = PRECIO - PRECIO * descuento / 100;
			}
			else	//Es un caso especifico de si el usuario ingreso como ID la estacion Otoño o Primavera, y con el ID del destino Cordoba
			{
				precioFinal = PRECIO
			}

	alert ("El precio final es de $ " + precioFinal); //Se muestra el mensaje con el resultado final
}//FIN DE LA FUNCIÓN