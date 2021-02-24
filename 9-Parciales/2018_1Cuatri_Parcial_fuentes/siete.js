/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
        //Estbalezco Variables
    let notaIngresada;
    let contadorDeAlumnos;
    let sexoIngresado;
    let sexoConNotaMasBaja;
    let promedioNotas;
    let notaMasBaja;
    let cantidadDeVarones;
    let acumuladorDeNotas;
    let banderaDelPrimero;

    banderaDelPrimero = "Es el primero";
    contadorDeAlumnos = 0;
    cantidadDeVarones = 0;

        //Inicio del loop
    while (contadorDeAlumnos < 5)   //Una vez que el contador llegue a 5, se cierra el loop
    {
        notaIngresada = prompt("Ingrese una nota"); //Le solicita al usuario que ingrese la nota
        notaIngresada = parseInt(notaIngresada);

        while(isNaN(notaIngresada) == true || notaIngresada < 0 || notaIngresada > 10)  //Se valida la nota
        {
            notaIngresada = prompt("Error. Por favor ingrese una nota entre 0 y 10");
            notaIngresada = parseInt(notaIngresada);
        }

        sexoIngresado = prompt ("Ingrese el sexo del alumno")   //Se solicita al usuario que ingrese el sexo
        
        while (sexoIngresado != "f" && sexoIngresado != "m")    //Se valida el sexo
        {
            sexoIngresado = prompt("Error. Por favor ingrese el sexo del alumno, debe ser f o m");
        }

        if(banderaDelPrimero == "Es el primero")    //Inicio de la bandera
        {
            notaMasBaja = notaIngresada;
            banderaDelPrimero = "No es el primero";
            acumuladorDeNotas = notaIngresada;
            sexoConNotaMasBaja = sexoIngresado;
        }

        else    //Se ejecuta cuando la bandera no cumpla la condicion de la linea 45
        {
            if(notaIngresada < notaMasBaja) //b) La nota más baja y el sexo de esa persona.
            {
                notaMasBaja = notaIngresada;
                sexoConNotaMasBaja = sexoIngresado
                acumuladorDeNotas = acumuladorDeNotas + notaIngresada;
            }
            else    //En caso contrario de la linea 55, se inicia el else
            {
                if(notaIngresada >= 6 && sexoIngresado == "m")  //c) La cantidad de varones que su nota haya sido mayor o igual a 6.
                {
                    cantidadDeVarones++;    //Se sube el contador de los varones con notas mayor o igual a 6
                    acumuladorDeNotas = acumuladorDeNotas + notaIngresada;
                }
                else    //En caso de que no se cumpla ninguna de las condiciones mencionadas previamente, se ejecuta este bloque
                {
                    acumuladorDeNotas = acumuladorDeNotas + notaIngresada;
                }
            }
        }

        contadorDeAlumnos++;    //Se suma 1 al contador de alumnos, asi hasta llegar a 5
    }
 
    promedioNotas = acumuladorDeNotas / contadorDeAlumnos;  //a) El promedio de las notas totales.

    alert("El promedio de las notas es de: " + promedioNotas);
    alert("La nota mas baja es " + notaMasBaja + " y es " + sexoConNotaMasBaja);
    alert("La cantidad de varones cuya nota haya sido mayor o igual a 6 es de: " + cantidadDeVarones);

}
