/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
		//Declaro variables
	let sueldo;
	let nuevoSueldo;
	let aumento; //Calcula el aumento al sueldo

	sueldo = document.getElementById("txtIdSueldo").value;
		//Convierte el sueldo ingresado en el cuadro a un numero entero
	sueldo = parseInt(sueldo);
		//Se calcula el aumento del 10%
	nuevoSueldo = sueldo * 10 / 100;
		//Se calcula el aumento del 10% con el sueldo
	aumento = sueldo + nuevoSueldo;

	document.getElementById("txtIdResultado").value = aumento;
}
