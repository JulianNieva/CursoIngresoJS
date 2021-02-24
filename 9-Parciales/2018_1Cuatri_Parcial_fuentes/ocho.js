/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    let letraIngresada;
    let numeroIngresado;
    let respuesta;
    let contadorNumerosPares;
    let contadorNumerosImpares;
    let cantidadDeCeros;
    let promedioNumerosPositivos;
    let acumuladorNumerosPositivos;
    let contadorNumerosPositivos;
    let acumuladorNumeroNegativos;
    let numeroMaximo;
    let numeroMinimo;
    let letraDeNumeroMaximo;
    let letraDeNumeroMinimo;
    let banderaDelPrimero;

    respuesta = "si";
    banderaDelPrimero = "Es el primero";

    contadorNumerosImpares = 0;
    contadorNumerosPares = 0;
    cantidadDeCeros = 0;
    contadorNumerosPositivos = 0;
    acumuladorNumerosPositivos = 0;
    acumuladorNumeroNegativos = 0

    while (respuesta == "si")
    {
        letraIngresada = prompt("Ingrese una letra");

        numeroIngresado = prompt("Ingrese un numero");
        numeroIngresado = parseInt(numeroIngresado);
        while(isNaN(numeroIngresado) == true || numeroIngresado < -100 || numeroIngresado > 100)
        {
            numeroIngresado = prompt("Error, por favor ingrese un numero entre -100 y 100");
            numeroIngresado = parseInt(numeroIngresado);
        }

        if(banderaDelPrimero == "Es el primero")
        {
            numeroMinimo = numeroIngresado;
            numeroMaximo = numeroIngresado;
            letraDeNumeroMaximo = letraIngresada;
            letraDeNumeroMinimo = letraIngresada;
            banderaDelPrimero = "No es el primero";
        }

        if(numeroIngresado > numeroMaximo)  //f) El número y la letra del máximo y el mínimo.
        {
            numeroMaximo = numeroIngresado;
            letraDeNumeroMaximo = letraIngresada;
        }
        else
        {
            if(numeroIngresado < numeroMinimo)
            {
                numeroMinimo = numeroIngresado;
                letraDeNumeroMinimo = letraIngresada;
            }
        }

        if(numeroIngresado > 0)
        {
            acumuladorNumerosPositivos = acumuladorNumerosPositivos + numeroIngresado;
            contadorNumerosPositivos++;
        }
        else
        {
            acumuladorNumeroNegativos = acumuladorNumeroNegativos + numeroIngresado //e) La suma de todos los números negativos.
        }
        
        if(numeroIngresado == 0)    //c) La cantidad de ceros.
        {
            cantidadDeCeros++;
        }    
        else
        { 
            if (numeroIngresado % 2 == 0)   //a) La cantidad de números pares.
            {
                contadorNumerosPares++;
            }
            else    //b) La cantidad de números impares.
            {
                contadorNumerosImpares++;
            }
        }

        respuesta = prompt("Desea continuar?");
    }

    promedioNumerosPositivos = acumuladorNumerosPositivos / contadorNumerosPositivos;   //d) El promedio de todos los números positivos ingresados.

    console.log("A- La cantidad de numeros pares es de: " + contadorNumerosPares);
    console.log("B- La cantidad de numeros impares es de: " + contadorNumerosImpares);
    console.log("C- La cantidad de ceros es de:" + cantidadDeCeros);
    console.log("D- El promedio de todos los numeros positivos ingresados es de: " + promedioNumerosPositivos);
    console.log("E- La suma de todos los numeros negativos es de: " + acumuladorNumeroNegativos);
    console.log("F- El numero y la letra maxima son: " + numeroMaximo + ", " + letraDeNumeroMaximo);
    console.log("F2- El numero y la letra minima son: " + numeroMinimo + ", " + letraDeNumeroMinimo);
}