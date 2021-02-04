/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedir al usuario el descuento
en el cuadro de texto "RESULTADO"
Julian Leandro Nieva
Ejercicio 10bis*/
function mostrarAumento()
{
		//Declaro variables
	let importe;
	let importeFinal;
	let descuento; //Calcula el descuento al sueldo
	let porcentaje;

	importe = document.getElementById("txtIdImporte").value;
		//Convierte el importe ingresado en el cuadro a un numero entero
	importe = parseInt(importe);
	porcentaje = prompt("Ingrese el descuento");
		//Se calcula el descuento que el usuario establece del descuento
	descuento = importe * porcentaje / 100;
		//Se calcula el importe final
	importeFinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;
}