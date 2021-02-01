/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
		//Declaro variables
	let importe;
	let importeFinal;
	let descuento; //Calcula el descuento al sueldo

	importe = document.getElementById("txtIdImporte").value;
	//Convierte el importe ingresado en el cuadro a un numero entero
	importe = parseInt(importe);
	//Se calcula el 25% del descuento
	descuento = importe * 25 / 100;
	//Se calcula el importe final
	importeFinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;
}