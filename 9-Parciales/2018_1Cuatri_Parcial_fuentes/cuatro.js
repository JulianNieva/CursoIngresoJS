/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
Julian Leandro Nieva 1°C*/

function mostrar()
{
    let numero1;
    let numero2;
    let suma;
    let resta;
    let resultado;

    numero1 = prompt("Ingrese el numero 1");
    numero1 = parseInt(numero1);

    numero2 = prompt("Ingrese el numero 2");
    numero2 = parseInt(numero2);

    if (numero1 == numero2)
    {
        alert ("El numero 1 es " + numero1 + ", el numero 2 es " + numero2);
    }
    else
    {
        if(numero1 > numero2)
        {
            resta = numero1 - numero2;
            resultado = resta;
            alert ("El resultado es " + resultado);
        }
        else
        {
            if(numero1 < numero2)
            {
                suma = numero1 + numero2;
                resultado = suma;
            }
        }
    }
    if (suma > 10)
    {
        alert("La suma es " + suma + " y supero el 10");
    }
}