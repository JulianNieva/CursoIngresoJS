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
	let tipoDeProductoIngresado;
	let precioIngresado;
	let	cantidadDeUnidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let cargaDeProductosIngresados;
	let banderaAlcoholMasBarato;
	let alcoholMasBarato;
	let cantidadDeUnidadesAlcoholMasBarato;
	let fabricanteDeAlcoholMasBarato;
	let acumuladorDeUnidadesDeJabón;
	let acumuladorDeUnidadesDeBarbijo;
	let acumuladorDeUnidadesAlcohol;
	let contadorDeAlcohol;
	let contadorDeJabon;
	let contadorDeBarbijo;
	let promedioConMasUnidades;
	let tipoDeProductoConMasUnidades;


	contadorDeAlcohol = 0;
	contadorDeJabon = 0;
	contadorDeBarbijo = 0;
	
	acumuladorDeUnidadesDeJabón = 0;
	acumuladorDeUnidadesDeBarbijo = 0;
	acumuladorDeUnidadesAlcohol = 0;
	
	banderaAlcoholMasBarato = 1;
	cargaDeProductosIngresados = 0;

	while(cargaDeProductosIngresados < 5)
	{
		cargaDeProductosIngresados++;
		
		tipoDeProductoIngresado = prompt ("Ingrese el producto. Debe ser: barbijo, jabon o alcohol");
		while(isNaN(tipoDeProductoIngresado) == false || tipoDeProductoIngresado != "barbijo" && tipoDeProductoIngresado != "jabon" && tipoDeProductoIngresado != "alcohol")
		{
			tipoDeProductoIngresado = prompt("Error. Por favor ingrese un producto valido. Debe ser: barbijo, jabon o alcohol");
		}

		precioIngresado = prompt("Ingrese el precio del producto")
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error. Por favor ingrese un precio del producto valido, debe ser entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadDeUnidadesIngresadas = prompt("Ingrese la cantidad de unidades del producto");
		cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		while(isNaN(cantidadDeUnidadesIngresadas) == true || cantidadDeUnidadesIngresadas < 1 || cantidadDeUnidadesIngresadas > 1000)
		{
			cantidadDeUnidadesIngresadas = prompt("Error. Por favor ingrese la cantidad de unidades, debe ser entre 1 y 1000");
			cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		}

		marcaIngresada= prompt("Ingrese la marca del producto");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error. Por favor ingrese una marca del producto valido");
		}

		fabricanteIngresado = prompt ("Ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado = prompt("Error. Por favor ingrese un fabricante valido");
		}

		/*if(tipoDeProductoIngresado == "alcohol") == No esta tan mal
		{ 
			
			if(banderaAlcoholMasBarato == 1)	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			{
				alcoholMasBarato = precioIngresado;
				cantidadDeUnidadesAlcoholMasBarato = cantidadDeUnidadesIngresadas;
				fabricanteDeAlcoholMasBarato = fabricanteIngresado;
				banderaAlcoholMasBarato = 0;
			}	
		
			else
			{
				if(precioIngresado < alcoholMasBarato && tipoDeProductoIngresado == "alcohol")
				{
					alcoholMasBarato = precioIngresado;
					cantidadDeUnidadesAlcoholMasBarato = cantidadDeUnidadesIngresadas;
					fabricanteDeAlcoholMasBarato = fabricanteIngresado;
				}
			}
		} */
		switch (tipoDeProductoIngresado)	//b) Del tipo con mas unidades, el promedio por compra
		{
			case "alcohol":
					//if(banderaAlcoholMasBarato == 1)	
					if(contadorDeAlcohol == 0)	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
					{
						alcoholMasBarato = precioIngresado;
						cantidadDeUnidadesAlcoholMasBarato = cantidadDeUnidadesIngresadas;
						fabricanteDeAlcoholMasBarato = fabricanteIngresado;
						//banderaAlcoholMasBarato = 0;
					}	
					else
					{
						if(precioIngresado < alcoholMasBarato)
						{
							alcoholMasBarato = precioIngresado;
							cantidadDeUnidadesAlcoholMasBarato = cantidadDeUnidadesIngresadas;
							fabricanteDeAlcoholMasBarato = fabricanteIngresado;
						}
					}
				acumuladorDeUnidadesAlcohol = acumuladorDeUnidadesAlcohol + cantidadDeUnidadesIngresadas;
				contadorDeAlcohol++;
				break;
			case "jabon":
				acumuladorDeUnidadesDeJabón = acumuladorDeUnidadesDeJabón + cantidadDeUnidadesIngresadas;
				contadorDeJabon++;
				break;
			case "barbijo":
				acumuladorDeUnidadesDeBarbijo = acumuladorDeUnidadesDeBarbijo + cantidadDeUnidadesIngresadas;
				contadorDeBarbijo++;
				break;
		
		}//Fin del switch
	} // FIN del while
	
		//Se comprueba quien tiene mas unidades para el ejercicio b
	if(acumuladorDeUnidadesAlcohol > acumuladorDeUnidadesDeJabón && acumuladorDeUnidadesAlcohol > acumuladorDeUnidadesDeBarbijo)
	{
		promedioConMasUnidades = acumuladorDeUnidadesAlcohol / contadorDeAlcohol;
		tipoDeProductoConMasUnidades = "Alcohol";
	}
	else
	{
		if(acumuladorDeUnidadesDeJabón > acumuladorDeUnidadesDeBarbijo)
		{
			promedioConMasUnidades = acumuladorDeUnidadesDeJabón / contadorDeJabon;
			tipoDeProductoConMasUnidades = "Jabon";
		}
		else
		{
			promedioConMasUnidades = acumuladorDeUnidadesDeBarbijo / contadorDeBarbijo;
			tipoDeProductoConMasUnidades = "Barbijo";
		}
	}

	console.log("A- El alcohol mas barato tiene un precio de: $" + alcoholMasBarato + ", la cantidad de unidades que hay son: " + cantidadDeUnidadesAlcoholMasBarato + " y su fabricante es: " + fabricanteDeAlcoholMasBarato);
	console.log("B- El tipo de producto que tiene mas unidades es: " + tipoDeProductoConMasUnidades + " con un promedio por compra de: $" + promedioConMasUnidades);
	console.log("C- La cantidad de unidades de jabon en total es de: " + acumuladorDeUnidadesDeJabón);
}	//Fin del programa
