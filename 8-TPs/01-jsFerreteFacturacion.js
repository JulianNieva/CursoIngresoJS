/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Julian Leandro Nieva
1°TP
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
        //Se obtienen los valores de las variables
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
        //Convierte el valor ingresado en numeros enteros 
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
        //Se calcula suma de los precios
    suma = precio1 + precio2 + precio3;

    alert("La suma es $ " + suma)
}
function Promedio () 
{
        //Establezco las variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedio;
        //Se obtienen los valores de las variables
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
        //Convierte el valor ingresado en numeros enteros
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
        //Se realizan los calculos para sacar el promedio
    suma = precio1 + precio2 + precio3;
    promedio = suma / 3;

    alert("La suma en total es $ " + promedio)
}
function PrecioFinal () 
{
        //Establezco las variables
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let precioFinal;
        //Se obtienen los valores de las variables
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
        //Valores pasan a numeros enteros
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
        //Se calcula el IVA
    suma = precio1 + precio2 + precio3;
    iva = suma * 21 / 100;
    precioFinal = suma + iva;

    alert("La suma es $ " + precioFinal)
}