/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
Julian Leandro Nieva 1°C
Parcial recu ejercicio 2*/

function mostrar()
{
    let tipoDeProductoIngresado;
    let cantidadDeBolsasIngresadas;
    let precioPorBolsaIngresado;
    let respuesta;
    let porcentaje;
    let descuento;
    let acumuladorDeBolsas;
    let precioBruto;
    let precioBrutoConDescuento;
    let sumaPrecioBruto;
    let banderaDelTipoMasCaro;
    let productoMasCaro;
    let precioDelProductoMasCaro;
    let acumuladorDeBolsasArena;
    let acumuladorDeBolsasCal;
    let acumuladorDeBolsasCemento;

    acumuladorDeBolsasArena = 0;
    acumuladorDeBolsasCal = 0;
    acumuladorDeBolsasCemento = 0;

    acumuladorDeBolsas = 0;
    sumaPrecioBruto = 0;

    respuesta = "si";
    banderaDelTipoMasCaro = 0;

    while(respuesta == "si")
    {
      tipoDeProductoIngresado = prompt("Ingrese el tipo de producto. (arena, cal cemento)");
      while(isNaN(tipoDeProductoIngresado) == false ||tipoDeProductoIngresado != "arena" && tipoDeProductoIngresado != "cal" && tipoDeProductoIngresado != "cemento")
      {
        tipoDeProductoIngresado = prompt("Error. Por favor ingrese un producto valido. (arena, cal cemento)");
      }

      cantidadDeBolsasIngresadas = prompt("Ingrese la cantidad de bolsas");
      cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
      while(isNaN(cantidadDeBolsasIngresadas) == true || cantidadDeBolsasIngresadas < 1)
      {
        tipoDeProductoIngresado = prompt("Error. Por favor ingrese una cantidad valida");
      }

      precioPorBolsaIngresado = prompt("Ingrese el precio por bolsa");
      precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
      while(isNaN(precioPorBolsaIngresado) == true || precioPorBolsaIngresado < 1)
      {
        precioPorBolsaIngresado = prompt("Error. Por favor ingrese un precio valido");
        precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
      }

      acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsasIngresadas;
      precioBruto = acumuladorDeBolsas * precioPorBolsaIngresado;
      sumaPrecioBruto = sumaPrecioBruto + precioBruto;

      if(banderaDelTipoMasCaro == 0)
      {
        productoMasCaro = tipoDeProductoIngresado;
        precioDelProductoMasCaro = precioPorBolsaIngresado;
        banderaDelTipoMasCaro = 1;
      }
      else
      {
        if(precioPorBolsaIngresado > precioDelProductoMasCaro)
        {
          productoMasCaro = tipoDeProductoIngresado;
          precioDelProductoMasCaro = precioPorBolsaIngresado;
        }
      }

      switch(tipoDeProductoIngresado)
      {
        case "arena":
          acumuladorDeBolsasArena = acumuladorDeBolsasArena + cantidadDeBolsasIngresadas;
          break;
        case "cal":
          acumuladorDeBolsasCal = acumuladorDeBolsasCal + cantidadDeBolsasIngresadas;
          break;
        case "cemento":
          acumuladorDeBolsasCemento = acumuladorDeBolsasCemento + cantidadDeBolsasIngresadas;
          break;
      } //Fin del switch

      respuesta = prompt("Desea continuar?");
    } //Fin del while

    if(acumuladorDeBolsas > 9 && acumuladorDeBolsas < 30)
    {
      porcentaje = 15 / 100;
    }
    else
    {
      if(acumuladorDeBolsas > 29)
      {
        porcentaje = 25 / 100;
      }
    }

    //A) El importe total a pagar , bruto sin descuento
    if(porcentaje == 0)
    {
      console.log("El importe total a pagar sin descuento es : " + sumaPrecioBruto);
    }
    else  //B)el importe total a pagar con descuento(solo si corresponde)
    {
      descuento = sumaPrecioBruto * porcentaje;
      precioBrutoConDescuento = sumaPrecioBruto - descuento;
      console.log("El importe total a pagar con descuento es : " + precioBrutoConDescuento);
    }

    //D)Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
    if(acumuladorDeBolsasArena > acumuladorDeBolsasCal && acumuladorDeBolsasArena > acumuladorDeBolsasCemento)
    {
      console.log("El tipo con mas cantidad de bolsas en total de la compra es Arena");
    }
    if(acumuladorDeBolsasCal > acumuladorDeBolsasCemento)
    {
      console.log("El tipo con mas cantidad de bolsas en total de la compra es Cal");
    }
    else
    {
      console.log("El tipo con mas cantidad de bolsas en total de la compra es Cemento");
    }

    //F) El tipo mas caro
    console.log("El tipo mas caro es: " + productoMasCaro + " con un precio de: $" + precioDelProductoMasCaro);

}//Fin de la funcion