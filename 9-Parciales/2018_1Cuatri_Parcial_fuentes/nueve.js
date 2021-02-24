/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
Julian Leandro Nieva 1°C
Parcial 2018 ejercicio 9*/ 

function mostrar()
{
        //Establezco Variables
    let marcaDelProducto;
    let pesoDelProducto;
    let productoMasPesado;
    let temperaturaDeAlmacenamiento;
    let pesoMaximo;
    let pesoMinimo;
    let contadorDePeso;
    let contadorDeProductosMenosDe0Grados;
    let promedioDelPeso;
    let temperaturasPares;
    let seguir;
    let banderaDelPrimero;
    let acumuladorPeso;

    contadorDePeso = 0;
    temperaturasPares = 0;
    contadorDeProductosMenosDe0Grados = 0;
    
    seguir = "si";
    banderaDelPrimero = "Es el primero";

        //Comienza el bucle
    while (seguir == "si")
    {
        marcaDelProducto = prompt ("Ingrese la marca del producto");
        pesoDelProducto = prompt ("Ingrese el peso del producto");
        pesoDelProducto = parseInt (pesoDelProducto);
        while(isNaN(pesoDelProducto) == true || pesoDelProducto < 1 || pesoDelProducto > 100) // Se verifica de si el peso no es un número y si esta fuera de los valores establecidos
        {
            pesoDelProducto = prompt ("Error. Por favor ingrese el peso del producto, debe ser entre 1 y 100");
        }
        
        temperaturaDeAlmacenamiento = prompt ("Ingrese la temperatura de almacenamiento");
        temperaturaDeAlmacenamiento = parseInt (temperaturaDeAlmacenamiento);
        while(isNaN(temperaturaDeAlmacenamiento) == true || temperaturaDeAlmacenamiento < -30 || temperaturaDeAlmacenamiento > 30)  //Se verifica si la temperatura no es numero y si esta fuera de los valores estblecidos
        {
            temperaturaDeAlmacenamiento = prompt ("Error. Por favor ingrese la temperatura del producto, debe ser entre -30 y 30");
        }
        
        if (banderaDelPrimero == "Es el primero") 
        {
            pesoMaximo = pesoDelProducto;
            pesoMinimo = pesoDelProducto;
            contadorDePeso++;
            banderaDelPrimero = "No es el primero";
            acumuladorPeso = pesoDelProducto
        }
        else
        {
            if(pesoDelProducto > pesoMaximo)   //   F) El peso máximo y el mínimo. 
            {
                pesoMaximo = pesoDelProducto;
                productoMasPesado = marcaDelProducto;   //B) La marca del producto más pesado
                contadorDePeso++;
                acumuladorPeso = acumuladorPeso + pesoDelProducto;
            }
            else 
            {
                pesoMinimo = pesoDelProducto;
                contadorDePeso++;
                acumuladorPeso = acumuladorPeso + pesoDelProducto;  
            }
        }
        if (temperaturaDeAlmacenamiento % 2 == 0) //A) La cantidad de temperaturas pares.
        {
            temperaturasPares++;
        }

        if (temperaturaDeAlmacenamiento < 0)    //C) La cantidad de productos que se conservan a menos de 0 grados.
        {
            contadorDeProductosMenosDe0Grados++;
        }

        seguir = prompt("Desea continuar?");
    }
    promedioDelPeso = acumuladorPeso / contadorDePeso;    //D) El promedio del peso de todos los productos.
 
    console.log("A- La cantidad de temperaturas pares es de: " + temperaturasPares);
    console.log("B- La marca del producto mas pesado es: " + productoMasPesado + " con un peso de "+ pesoMaximo + " kg");
    console.log("C- El total de productos que se conservan a menos de 0 grados son: " + contadorDeProductosMenosDe0Grados);
    console.log("D- El promedio del peso de todos los productos es de: " + promedioDelPeso + " kg");
    console.log("F- El peso maximo es de: " + pesoMaximo + " kg, El peso minimo es de: " + pesoMinimo + " kg");
}