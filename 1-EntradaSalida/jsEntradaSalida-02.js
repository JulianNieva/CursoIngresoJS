/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() 
{
	let nombre; //Se define la variable
	
	nombre = prompt("Ingrese su Nombre"); //Se administra el valor a "nombre" una vez que se inserto el valor que se desea
	
	alert("Su nombre es " + nombre + "."); //Muestro la variable
}
