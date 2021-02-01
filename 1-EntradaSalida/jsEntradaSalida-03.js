/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre //Se define la variable
	
	nombre = document.getElementById("txtIdNombre").value; //Busca en el HTML el valor que le fue planetado
	
	alert("Su nombre es " + nombre + "."); //Se implementa el mensaje
}
