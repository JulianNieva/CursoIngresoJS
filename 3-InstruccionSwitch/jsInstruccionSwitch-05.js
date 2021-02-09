/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Julian Leandro Nieva 1°C*/ 
function mostrar()
{
	//tomo la hora
	let horaDelDia =document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	switch (horaDelDia)
	{
		case(7):
		case(8):
		case(9):
		case(10):
		case(11):
			alert("Es de mañana");
			break;
		
		default:
			break;
	}
}//FIN DE LA FUNCIÓN