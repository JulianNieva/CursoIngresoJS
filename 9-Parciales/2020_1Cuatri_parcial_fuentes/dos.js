/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
  let cantidadDeBolsasIngresadas;
  let tipoDeProductoIngresado;
  let descuento;
  let precioPorBolsaIngresado;
  let respuesta;
  let porcentaje;
  let precioParcial;
  let acumuladorDePrecio;
  let acumuladorCantidadBolsas;
  let precioBruto;
  let acumuladorDeArena;
  let acumuladorDeCal;
  let acumuladorDeCemento;
  let tipoMasCaro;
  let precioMasCaro;

  acumuladorDePrecio = 0;
  acumuladorCantidadBolsas = 0;
  acumuladorDePrecio = 0;

  banderaDelTipoMasCaro = "Es el primero";
  respuesta = "si";

  while(respuesta == "si")
  {
      tipoDeProductoIngresado = prompt ("Ingrese el tipo de producto de contruccion");

      while(isNaN(tipoDeProductoIngresado) == false || tipoDeProductoIngresado != "arena" && tipoDeProductoIngresado != "cal" && tipoDeProductoIngresado != "cemento")
      {
        tipoDeProductoIngresado = prompt ("Error. Por favor ingrese el producto de construccion: arena, cal o cemento");
      }

      cantidadDeBolsasIngresadas = prompt("Ingrese la cantidad de bolsas de dicho producto");
      cantidadDeBolsasIngresadas = parseInt (cantidadDeBolsasIngresadas);

      while(isNaN(cantidadDeBolsasIngresadas) == true || cantidadDeBolsasIngresadas < 1)
      {
        cantidadDeBolsasIngresadas = prompt ("Error. Ingrese un numero con la cantidad de bolsas deseadas");
        cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
      }

      precioPorBolsaIngresado = prompt ("Ingrese el precio por bolsa");
      precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);

      while(isNaN(precioPorBolsaIngresado) == true || precioPorBolsaIngresado < 1)
      {
        precioPorBolsaIngresado = prompt ("Error. Ingrese el precio por bolsas (mas de 0)");
        precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
      }

      acumuladorCantidadBolsas = acumuladorCantidadBolsas + cantidadDeBolsasIngresadas; // acumula la cantidad de bolsas
      precioBruto = cantidadDeBolsasIngresadas * precioPorBolsaIngresado;
      sumaPrecioBruto = sumaPrecioBruto + precioBruto; //suma el precio bruto
    
      switch (tipoDeProductoIngresado)
      {
        case "arena":
          acumuladorDeArena = acumuladorDeArena + cantidadDeBolsasIngresadas;
          break;
        case "cal":
          acumuladorDeCal = acumuladorDeCal + cantidadDeBolsasIngresadas;
          break;
        case "cemento":
          acumuladorDeCemento = acumuladorDeCemento + cantidadDeBolsasIngresadas;
          break;
      }
      
    //f) el tipo del mas caro

      if(banderaDelTipoMasCaro == "Es el primero")
      {
        precioMasCaro = precioPorBolsaIngresado;
        tipoMasCaro = tipoDeProductoIngresado;
        banderaDelTipoMasCaro = "No es el primero";
      }
      else
      {
        if (precioPorBolsaIngresado > precioMasCaro)
        {
          precioMasCaro = precioPorBolsaIngresado;
          tipoMasCaro = tipoDeProductoIngresado;
        }
      }
      
    respuesta = prompt("Desea continuar?");
  }

    //d) Informar el tipo con mas cantidad de bolsas.
  if(acumuladorDeArena > acumuladorDeCal && acumuladorDeArena > acumuladorDeCemento)
	{
		tipoMasCantidad = "arena";
	}
	else
	{
		if(acumuladorDeCal > acumuladorDeCemento)	//uh la puta madre
		{
			tipoMasCantidad = "cal";
		}
		else
		{
			tipoMasCantidad = "cemento";
		}
	}

  if(cantidadDeBolsasIngresadas > 10 && cantidadDeBolsasIngresadas < 30)
  {
    /*porcentaje = 15 / 100;*/
    porcentaje = 15;
  }
  else
  {
    if(cantidadDeBolsasIngresadas > 30)
    {
      /*porcentaje = 25 / 100;*/
      porcentaje = 25;
    }
  }

    console.log("El precio bruto es " + precioBruto);

    if(cantidadDeBolsasIngresadas > 10)
    {
      descuento = sumaPrecioBruto * porcentaje / 100;
      precioBruto = precioBruto - descuento;
      console.log("El precio con descuento es " + precioBruto)
    }

    console.log(tipoDeProductoIngresado);
    console.log(cantidadDeBolsasIngresadas);
    console.log(precioPorBolsaIngresado);
}
