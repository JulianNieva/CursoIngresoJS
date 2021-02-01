/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
		//Reservo espacio en la memoria 
	let nombre;
	let edad;
		//Guardo en la variable nombre y edad el texto que escribio el usuario dentro de la ventana prompt
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
		//Activa alert con las variables establecidas
	alert("Usted se llama " + nombre + " y tiene " + edad + " años."); 

}

