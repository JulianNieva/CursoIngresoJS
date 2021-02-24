/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Julian Leandro Nieva 1°C
Ejercicio 3*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("Ingrese el número clave.");

	while (claveIngresada != "utn750")
		{
			claveIngresada = prompt("Vuelva a intentarlo");
		}
	alert("Bienvenido!");
}//FIN DE LA FUNCIÓN