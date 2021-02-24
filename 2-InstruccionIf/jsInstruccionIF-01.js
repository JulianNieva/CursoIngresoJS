/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
Julian Leandro Nieva 1°C*/ 

function mostrar()
{
	//Establezco variable
	let velocidad;
	let tiempo;
	let distancia;
		//Se le solicita al usuario que ingrese la distancia y el tiempo
	distancia = prompt ("Ingrese la distancia que viajo");
	tiempo = prompt ("Ingrese cuanto tiempo tardo en llegar a su destino");

	distancia = parseInt (distancia);
	tiempo = parseInt (tiempo);

	velocidad = distancia / tiempo; //Se realiza el calculo para sacar la velocidad km/h

	if (velocidad < 61)
	{
		alert("Muy lento")
	}
		else
		{
			if(velocidad < 81)
			{
				alert ("Lento")
			}
				else
				{
					if ( velocidad < 101)
					{
						alert ("Buen ritmo")
					}
						else
						{
							if (velocidad < 121)
							{
								alert ("Ahi de la ley")
							}
							else
							{
								alert ("Eso no se hace..")
							}
						}
				}
		}
}//FIN DE LA FUNCIÓN