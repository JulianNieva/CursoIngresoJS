/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
Julian Leandro Nieva 1°C*/

function mostrar()
{
	let tipoDeProductos;
	let precioIngresado;
	let marcaIngresada;
	let fabricanteIngresado;
	let contadorDeProductos;
	let banderaDelAlcoholBarato;
	let precioAlcoholBarato;
	let cantidadDeAlcoholBarato;
	let fabricanteAlcoholBarato;
	let acumuladorDeBarbijo;
	let acumuladorDeAlcohol;
	let acumuladorDeJabon;
	let contadorDeJabon;
	let contadorDeAlcohol;
	let contadorDeBarbijo;
	let promedioConMasUnidades;
	let tipoMasCantidad;


	contadorDeJabon = 0;
	contadorDeAlcohol = 0;	
	contadorDeBarbijo = 0;

	acumuladorDeAlcohol = 0;
	acumuladorDeBarbijo = 0;
	acumuladorDeJabon = 0;

	banderaDelAlcoholBarato = 0;
	contadorDeProductos = 0;


	while(contadorDeProductos < 5)
	{
		contadorDeProductos++;

		tipoDeProductos = prompt("Por favor ingrese el tipo del producto");
		while(isNaN(tipoDeProductos) == false || tipoDeProductos != "barbijo" && tipoDeProductos != "jabon" && tipoDeProductos != "alcohol")
		{
			tipoDeProductos= prompt("Error. Por favor ingrese el tipo de producto: barbijo , jabon o alcohol");
		}

		precioIngresado = prompt("Ingrese el precio del producto");
		precioIngresado = parseInt(precioIngresado);

		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error. Por favor ingrese el precio del producto, debe ser entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades < 1 || cantidadDeUnidades > 1000)
		{
			cantidadDeUnidades = prompt("Error. Por favor ingrese la cantidad de unidades, debe ser entre 0 y 1000");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}

		marcaIngresada = prompt("Por favor ingrese la marca del producto");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada= prompt("Error. Por favor ingrese el tipo de producto: barbijo , jabón o alcohol");
		}

		fabricanteIngresado = prompt("Por favor ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado= prompt("Error. Por favor ingrese el fabricante del producto");
		}

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		/*if(tipoDeProductos == "alcohol")
		{
			if(banderaDelAlcoholBarato == 0)
			{
				precioAlcoholBarato = precioIngresado;
				cantidadDeAlcohol = cantidadDeUnidades;
				fabricanteAlcoholBarato = fabricanteIngresado;			
				banderaDelAlcoholBarato = 1;
			}
			else
			{
				if(precioIngresado < precioAlcoholBarato)
				{
					precioAlcoholBarato = precioIngresado;
					cantidadDeAlcohol = cantidadDeUnidades;
					fabricanteAlcoholBarato = fabricanteIngresado;
				}
			}
		}	//Fin de alcoholBarato*/

		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoDeProductos)
		{
			case "alcohol":
				if(tipoDeProductos == "alcohol")
		{
			//if(banderaDelAlcoholBarato == 0) 
			if(contadorDeAlcohol == 0)	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			{
				precioAlcoholBarato = precioIngresado;
				cantidadDeAlcohol = cantidadDeUnidades;
				fabricanteAlcoholBarato = fabricanteIngresado;			
				//banderaDelAlcoholBarato = 1;
			}
			else
			{
				if(precioIngresado < precioAlcoholBarato)
				{
					precioAlcoholBarato = precioIngresado;
					cantidadDeAlcohol = cantidadDeUnidades;
					fabricanteAlcoholBarato = fabricanteIngresado;
				}
			}
		}
				acumuladorDeAlcohol = acumuladorDeAlcohol + cantidadDeUnidades;
				contadorDeAlcohol++;
				break;
			case "jabon":
				acumuladorDeJabon = acumuladorDeJabon + cantidadDeUnidades;
				contadorDeJabon++;
				break;
			case "barbijo":
				acumuladorDeBarbijo = acumuladorDeBarbijo + cantidadDeUnidades;
				contadorDeBarbijo++;
				break;

		}	//Dentro del while determino cual producto tiene mas unidades

	}	//Fin de while

		//Fuera del while determino la consigna de la B)
	if(acumuladorDeAlcohol > acumuladorDeJabon && acumuladorDeAlcohol > acumuladorDeBarbijo)
	{
		tipoMasCantidad = "alcohol";
		promedioConMasUnidades = acumuladorDeAlcohol / contadorDeAlcohol;
	}
	else
	{
		if(acumuladorDeJabon > acumuladorDeBarbijo)	//uh la puta madre
		{
			tipoMasCantidad = "jabon";
			promedioConMasUnidades = acumuladorDeJabon / contadorDeJabon;
		}
		else
		{
			tipoMasCantidad = "barbijo";
			promedioConMasUnidades = acumuladorDeBarbijo / contadorDeBarbijo;
		}
	}

	console.log("")
	console.log("El tipo es " + tipoMasCantidad + " y el promedio es: " + promedioConMasUnidades);
	console.log("La cantidad de jabones en total son: " + acumuladorDeJabon);




}	//Fin del programa
