/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 Julian Leandro Nieva 1°C
 TP 12*/
function ComenzarIngreso () 
{
 		//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidadIngresada;

		//A.	Edad, entre 18 y 90 años inclusive.
	edadIngresada = prompt ("Ingrese su edad");
	while ((isNaN(edadIngresada) == true) || edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada = prompt ("Error, ingrese un numero entre 18 y 90 inclusive");
		}	

		//B.	Sexo, “M” para masculino y “F” para femenino
	sexoIngresado = prompt ("Ingrese su sexo");
	while (sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt ("Por favor ingrese su sexo")
	}

		//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivilIngresado = prompt ("Ingrese su estado civil ingresando 1-soltero, 2-casado, 3-divorciado y 4-viudo");
	while (isNaN (estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado = prompt ("Por favor ingrese su estado civil: 1-soltero, 2-casado, 3-divorciado y 4-viudo");
		estadoCivilIngresado = parseInt (estadoCivilIngresado);
	}

		// D.  Sueldo bruto, no menor a 8000
	sueldoBruto = prompt ("Ingrese su sueldo Bruto");
	sueldoBruto = parseInt (sueldoBruto);
	while (isNaN(sueldoBruto) == true || sueldoBruto < 8000)
	{
		sueldoBruto = prompt ("Por favor ingrese su sueldo bruto, no debe ser menor a 8000");
		sueldoBruto = parseInt (sueldoBruto);
	}

	// E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	numeroLegajo = prompt ("Ingrese su número de legajo")
	numeroLegajo = parseInt (numeroLegajo);
	while (isNaN(numeroLegajo) == true || numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt ("Incorrecto, por favor ingrese su numero de legajo, no debe tener 0 a la izquierda")
	}

	// F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidadIngresada = prompt ("Ingrese su Nacionalidad: “A” para Argentino, “E” para Extranjero, “N” para Nacionalizados.");
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt ("Error, vuelva a ingresar su nacionalidad: “A” para Argentino, “E” para Extranjero, “N” para Nacionalizados.")
	}
		//Se comprueba el valor de estadoCivilIngresado		
	switch(estadoCivilIngresado)
		{
			case "1":
				estadoCivilIngresado = "Soltero";
				break;
			case "2":
				estadoCivilIngresado = "Casado";
				break;
			case "3":
				estadoCivilIngresado = "Divorciado";
				break;
			case "4":
				estadoCivilIngresado = "Viudo";
				break;
		}
			//Se comprueba el valor de nacionalidadIngresada
		switch (nacionalidadIngresada)
		{
			case "A":
				nacionalidadIngresada = "Argentino";
				break;
			case "E":
				nacionalidadIngresada = "Extranjero";
				break;
			case "N":
				nacionalidadIngresada = "Nacionalizado";
				break;
		}
			//Imprime todos los datos ingresados ya validados
		document.getElementById("txtIdEdad").value = edadIngresada;
		document.getElementById("txtIdSexo").value = sexoIngresado;
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
		document.getElementById("txtIdSueldo").value = sueldoBruto;
		document.getElementById("txtIdLegajo").value = numeroLegajo;
		document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}