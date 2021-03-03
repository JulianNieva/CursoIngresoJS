/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
Julian Leandro Nieva 1°C
Parcial recu 2020 ejercicio 1*/

function mostrar()
{
	let tipoDeProductoIngresado;
	let precioIngresado;
	let cantidadDeUnidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaJabonMasCaro;
	let precioDelJabonMasCaro;
	let cantidadDeUnidadesDeJabonMasCaro;
	let fabricanteDelJabonMasCaro;
	let cantidadDeAlcohol;
	let cantidadDeJabon;
	let cantidadDeBarbijo;
	let promedioPorCompraDeLosProductos;
	let acumuladorDeUnidadesAlcohol;
	let acumuladorDeUnidadesDeBarbijo;
	let acumuladorDeUnidadesDeJabón;
	
	acumuladorDeUnidadesAlcohol = 0;
	acumuladorDeUnidadesDeBarbijo = 0;
	acumuladorDeUnidadesDeJabón = 0;

	cantidadDeAlcohol = 0;
	cantidadDeJabon = 0;
	cantidadDeBarbijo = 0;

	for(contadorDeVueltas = 0; contadorDeVueltas < 5; contadorDeVueltas++)
	{
		tipoDeProductoIngresado = prompt("Ingrese el tipo de producto");
		while(isNaN(tipoDeProductoIngresado) == false || tipoDeProductoIngresado != "barbijo" && tipoDeProductoIngresado != "jabon" && tipoDeProductoIngresado != "alcohol")
		{
			tipoDeProductoIngresado = prompt("Error. Por favor ingrese un producto valido");
		}

		precioIngresado = prompt("Ingrese el precio del producto");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error. Ingrese un precio valido");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadDeUnidadesIngresadas = prompt("Ingrese la cantidad de unidades del producto");
		cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		while(isNaN(cantidadDeUnidadesIngresadas) == true || cantidadDeUnidadesIngresadas < 1 || cantidadDeUnidadesIngresadas > 1000)
		{
			cantidadDeUnidadesIngresadas = prompt("Error. Ingrese una cantidad valida");
			cantidadDeUnidadesIngresadas = parseInt(cantidadDeUnidadesIngresadas);
		}

		marcaIngresada = prompt("Ingrese la marca del producto");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error. Por favor ingrese una marca valida");
		}

		fabricanteIngresado = prompt("Ingrese el fabricante del producto");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado = prompt("Error. Por favor ingrese un fabricante valido");
		}

		switch(tipoDeProductoIngresado)
		{
			case "jabon":
				if(cantidadDeJabon == 0)
				{
					precioDelJabonMasCaro = precioIngresado;
					cantidadDeUnidadesDeJabonMasCaro = cantidadDeUnidadesIngresadas;
					fabricanteDelJabonMasCaro = fabricanteIngresado;
				}
				else
				{
					if(precioIngresado > precioDelJabonMasCaro)
					{
						precioDelJabonMasCaro = precioIngresado;
						cantidadDeUnidadesDeJabonMasCaro = cantidadDeUnidadesIngresadas;
						fabricanteDelJabonMasCaro = fabricanteIngresado;
					}
				}
				cantidadDeJabon++;
				acumuladorDeUnidadesDeJabón = acumuladorDeUnidadesDeJabón + cantidadDeUnidadesIngresadas;
				break;
			case "alcohol":
				acumuladorDeUnidadesAlcohol = acumuladorDeUnidadesAlcohol + cantidadDeUnidadesIngresadas;
				cantidadDeAlcohol++;
				break;
			case "barbijo":
				acumuladorDeUnidadesDeBarbijo = acumuladorDeUnidadesDeBarbijo + cantidadDeUnidadesIngresadas;
				cantidadDeBarbijo++;
				break;

		}//FIn del switch
	}//Fin del for

	//A) Del más caro de los jabones, la cantidad de unidades y el fabricante
	if(cantidadDeJabon == 0)
	{
		console.log("No se ingresaron unidades de jabon");
	}
	else
	{
		console.log("El mas caro de los jabones tiene un precio de: $" + precioDelJabonMasCaro + " tiene un total de: " + cantidadDeUnidadesDeJabonMasCaro + " de unidades y su fabricante es: " + fabricanteDelJabonMasCaro);
	}

	//B) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	if(acumuladorDeUnidadesAlcohol > acumuladorDeUnidadesDeJabón && acumuladorDeUnidadesAlcohol > acumuladorDeUnidadesDeBarbijo)
	{
		promedioPorCompraDeLosProductos = acumuladorDeUnidadesAlcohol / cantidadDeAlcohol;
		console.log("El producto con mas unidades es el Alcohol con un promedio por compra de: " + promedioPorCompraDeLosProductos);
	}
	else
	{
		if(acumuladorDeUnidadesDeJabón > acumuladorDeUnidadesDeBarbijo)
		{
			promedioPorCompraDeLosProductos = acumuladorDeUnidadesDeJabón / cantidadDeJabon;
			console.log("El producto con mas unidades es el Jabon con un promedio por compra de: " + promedioPorCompraDeLosProductos);
		}
		else
		{
			promedioPorCompraDeLosProductos = acumuladorDeUnidadesDeBarbijo / cantidadDeBarbijo;
			console.log("El producto con mas unidades es el Barbijo con un promedio por compra de: " + promedioPorCompraDeLosProductos);
		} 
	}

	//C)Cuántas unidades de Barbijos se compraron en total
	if(cantidadDeBarbijo == 0)
	{
		console.log("No se ingresaron unidades de Barbijo");
	}
	else
	{
		console.log("La cantidad de unidades de barbijos que se compraron en total es de: " + acumuladorDeUnidadesDeBarbijo);
	}

}//Fin de la funcion
