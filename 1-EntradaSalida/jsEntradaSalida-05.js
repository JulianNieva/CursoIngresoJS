/* bis :
Julian Leandro Nieva
Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/
function mostrar()
{	
		//Reservo espacio en la memoria 
	let nombre;
	let apellido;
	let edad;
	
		//Guardo en la variable nombre y edad el texto que escribio el usuario dentro de la ventana prompt
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido");
	
		//Activa alert con las variables establecidas
	alert("Usted se llama " + nombre + " " + apellido + " y tiene " + edad + " años."); 
}
