/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado. 
pedir nombre y edad,informar nombre de la persona mas joven y de la mas vieja
Julian Leandro Nieva 1°C
Ejercicio 9 bis*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let edadMaxima;
	let edadMinima;
	let respuesta;
	let nombreIngresado;
	let personaMasVieja;
	let personaMasJoven;
	
	//iniciar variables
	banderaDelPrimero = "Es el primero";
	respuesta = 'si';
	
	while(respuesta == "si") // Se valida la respuesta
	{
		nombreIngresado = prompt("Ingrese un nombre");
		numeroIngresado = prompt("Ingrese una edad");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "Es el primero")
		{
			edadMaxima = numeroIngresado;
			edadMinima = numeroIngresado;
			personaMasJoven = nombreIngresado;
			personaMasVieja = nombreIngresado;
			banderaDelPrimero = "NO es el primero...";
		}
		else
		{
			if(numeroIngresado > edadMaxima)
			{
				edadMaxima = numeroIngresado; //la variable numeroIngresado se actualiza si dicho numero es menor a 0
				personaMasVieja = nombreIngresado;	//La variable personaMasVieja se actualiza al nuevo nombreIngresado
			}
			if(numeroIngresado < edadMinima)
			{
				edadMinima = numeroIngresado; //la variable numeroIngresado se actualiza si dicho numero es menor a 0
				personaMasJoven = nombreIngresado; //La variable personaMasJoven se actualiza al nuevo nombreIngresado
			}
		}
		respuesta = prompt("Desea continuar?");
	}
	document.getElementById("txtIdMaximo").value = "La Persona mas vieja es " + personaMasVieja + " con una edad de " + edadMaxima;
	document.getElementById("txtIdMinimo").value = "La persona mas joven es " + personaMasJoven + " con una edad de " + edadMinima;
}//FIN DE LA FUNCIÓN