/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
	
	contador=0;
	acumulador=0;
	
	respuesta= "si";

	while(respuesta == "si")
		{
			numeroIngresado = prompt("Ingrese un número");	//El usuario debe ingresar un numero
			numeroIngresado = parseInt (numeroIngresado);

			acumulador = acumulador + numeroIngresado; //Se van sumando todos los numeros que vaya ingresando el usuario
			contador++; //El contador va sumando a medida que el usuario ingrese un numero

			respuesta = prompt ("Desea ingresar otro numero?"); //Se le cuestiona al usuario de agregar otro numero, si su respuesta es "no" el loop se termina
		}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN