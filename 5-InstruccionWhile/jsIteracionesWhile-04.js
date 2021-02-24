/*
al presionar el botón 
pedir un número entre 0 y 10 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("Ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("Por favor ingrese un número entre 0 y 10.");
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN