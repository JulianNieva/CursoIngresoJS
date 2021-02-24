/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
Julian Leandro Nieva*/ 

function mostrar()
{
    let planetaIngresado;

    planetaIngresado = prompt ("Ingrese un planeta del sistema solar");

    switch (planetaIngresado)
    {
        case "mercurio":
        case "venus":
            alert("Acá hace mas calor");
            break;
        case "tierra":
            alert("Acá vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert ("Acá hace mas frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }
}
