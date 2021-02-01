/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre

	nombre = document.getElementById("txtIdNombre").value; //Busca en el HTML el valor que le fue planetado

	alert(nombre);

	document.getElementById("txtIdNombre").value = ""; //Vuelve a estar en blanco la caja de texto
}


