/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Julian Leandro Nieva 1°C
Ejercicio 5*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Por favor ingrese f ó m.");

	while (sexoIngresado != "f" && sexoIngresado != "m" )
	{
		sexoIngresado = prompt("Por favor vuelva a ingresar el sexo.");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN