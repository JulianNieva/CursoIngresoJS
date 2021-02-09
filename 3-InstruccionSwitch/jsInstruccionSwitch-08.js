/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Julian Leandro Nieva*/ 
function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert ("En este destino hace FRIO");
			break;
		default:
			alert ("En este destino hace CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN