/*
Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
    let nombre;
    let localidad;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
}
