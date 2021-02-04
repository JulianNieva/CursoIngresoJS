/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Julian Leandro Nieva
Ejercicio 9 bis*/
function mostrarAumento()
{
		//Declaro variables
	let sueldo;
	let nuevoSueldo;
	let aumento; //Calcula el aumento al sueldo
	let porcentaje;

	sueldo = document.getElementById("txtIdSueldo").value;
		//Convierte el sueldo ingresado en el cuadro a un numero entero
	porcentaje = prompt("Ingresa el porcentaje");
	
	sueldo = parseInt(sueldo);
		//Se calcula el aumento ingresado por el usuario
	nuevoSueldo = sueldo * porcentaje / 100;
		//Se calcula el aumento ingresado por el usuario con el sueldo
	aumento = sueldo + nuevoSueldo;

	document.getElementById("txtIdResultado").value = aumento;
}
