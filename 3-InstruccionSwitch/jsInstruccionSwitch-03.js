/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
	//tomo el mes
	let mesDelAño =document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		
		default:
			alert("Este mes tiene 30 o mas dias");
			break;
	}
}//FIN DE LA FUNCIÓN