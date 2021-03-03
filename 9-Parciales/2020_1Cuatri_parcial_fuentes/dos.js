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
    let productoDeConstruccionIngresado;
    let respuesta;
    let cantidadDeBolsasIngresadas;
    let precioPorBolsaIngresado;
    let porcentaje;
    let descuento;
    let acumuladorCantidadDeBolsas;
    let acumuladorDeBolsasCal;
    let acumuladorDeBolsasCemento;
    let acumuladorDeBolsasArena;
    let tipoDeProductoMasCaro;
    let tipoConMasCantidadDeBolsas;
    let precioDelProductoMasCaro;
    let banderaProductoMasCaro;
    let precioBruto;
    let sumaPrecioBruto;
    let importeConDescuento;

    acumuladorCantidadDeBolsas = 0;
    sumaPrecioBruto = 0;

    acumuladorDeBolsasCal = 0;
    acumuladorDeBolsasCemento = 0;
    acumuladorDeBolsasArena = 0;

    respuesta = "si";
    banderaProductoMasCaro = 1;

    while(respuesta == "si")
    {
      productoDeConstruccionIngresado = prompt("Ingrese el tipo de producto");
      while(isNaN(productoDeConstruccionIngresado) == false || productoDeConstruccionIngresado != "arena" && productoDeConstruccionIngresado != "cal" && productoDeConstruccionIngresado != "cemento")
      {
        productoDeConstruccionIngresado = prompt("Error. Por favor ingrese un producto valido. Debe ser: arena, cal o cemento");
      }

      cantidadDeBolsasIngresadas = prompt("Ingrese la cantidad de bolsas");
      cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
      while(isNaN(cantidadDeBolsasIngresadas) == true)
      {
        cantidadDeBolsasIngresadas = prompt("Error. Por favor ingrese un numero valido para la cantidad de bolsas");
        cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
      }

      precioPorBolsaIngresado = prompt("Ingrese el precio por bolsa")
      precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
      while(isNaN(precioPorBolsaIngresado) == true || precioPorBolsaIngresado < 1)
      {
        precioPorBolsaIngresado = prompt("Error. Por favor ingrese un precio valido. Debe ser mas de 0")
        precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);
      }
    
        //El importe total a pagar , bruto sin descuento
      acumuladorCantidadDeBolsas = acumuladorCantidadDeBolsas + cantidadDeBolsasIngresadas;
      precioBruto = acumuladorCantidadDeBolsas * precioPorBolsaIngresado;
      sumaPrecioBruto = sumaPrecioBruto + precioBruto;
      
      if(banderaProductoMasCaro == 1) //f) El tipo mas caro
      {
        tipoDeProductoMasCaro = productoDeConstruccionIngresado;
        precioDelProductoMasCaro = precioPorBolsaIngresado;
        banderaProductoMasCaro = 0;
      }
      else
      {
        if(precioPorBolsaIngresado > precioDelProductoMasCaro)
        {
          tipoDeProductoMasCaro = productoDeConstruccionIngresado;
          precioDelProductoMasCaro = precioPorBolsaIngresado;
        }
      }
      
      switch(productoDeConstruccionIngresado) //d) Informar el tipo con mas cantidad de bolsas.
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
      }
    
      respuesta = prompt("Desea Continuar?");
    } //FIN del while

    if(acumuladorCantidadDeBolsas > 9 && acumuladorCantidadDeBolsas < 29)
    {
      porcentaje = 15 / 100;
    }
    else
    {
      if(acumuladorCantidadDeBolsas > 29)
      {
        porcentaje = 25 / 100;
      }
    }

    if(acumuladorDeBolsasArena > acumuladorDeBolsasCal && acumuladorDeBolsasArena > acumuladorDeBolsasCemento)  //d) Informar el tipo con mas cantidad de bolsas.
    {
      tipoConMasCantidadDeBolsas = "Arena";
    }
    else
    {
      if(acumuladorDeBolsasCal > acumuladorDeBolsasCemento)
      {
        tipoConMasCantidadDeBolsas = "Cal";
      }
      else
      {
        tipoConMasCantidadDeBolsas = "Cemento";
      }
    }

    if(acumuladorCantidadDeBolsas > 10) //b) el importe total a pagar con descuento(solo si corresponde)
    {
      descuento = sumaPrecioBruto * porcentaje;
      importeConDescuento = sumaPrecioBruto - descuento;
      console.log("El importe final con descuento es de: $" + importeConDescuento)
    }
    else
    {
      console.log("El importe final sin descuento es de: $" + sumaPrecioBruto);
    }

    console.log("D- El producto con mas cantidad de bolsas es: " + tipoConMasCantidadDeBolsas);
    console.log("F- El producto mas caro es: " + tipoDeProductoMasCaro);
}//FIN de la funcion
