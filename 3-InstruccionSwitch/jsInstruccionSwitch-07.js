/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
Julian Leandro Nieva 1°C*/

function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Mar del plata":
			alert("Este");
			break
		case "Cataratas":
			alert("Norte");
			break;
		default:
			alert("Sur");
			break;
	}
}//FIN DE LA FUNCIÓN