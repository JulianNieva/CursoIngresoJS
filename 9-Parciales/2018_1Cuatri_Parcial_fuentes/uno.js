/*
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
    let ancho;
    let largo;
    let perímetro;

    ancho = prompt("Ingrese el ancho del rectangulo");
    ancho = parseInt(ancho);

    largo = prompt ("Ingrese el largo del rectangulo");
    largo = parseInt (largo);

    perímetro = ancho * 2 + 2 * largo;
    perímetro = parseInt (perímetro);

    alert ("El perímetro del rectangulo es: " + perímetro);

}
