/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
		//Reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

		//Guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre");
		//Copio en nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina HTML
	document.getElementById("txtIdNombre").value = nombre;

}

