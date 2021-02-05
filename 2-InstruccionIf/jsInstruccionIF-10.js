function mostrar()
{
	let numeroRandom;
	
	numeroRandom = Math.floor(Math.random() * 10) + 1;
	numeroRandom = parseInt(numeroRandom);

	if(numeroRandom > 8)
	{
		alert(numeroRandom + ": EXCELENTE")
	}
	else
	{
		if(numeroRandom > 3 && numeroRandom < 9)
		{
			alert(numeroRandom + ": APROBO")
		}
		else
		{
			alert(numeroRandom + ": Vamos, la proxima se puede..")
		}
	}
	console.log(numeroRandom)
}//FIN DE LA FUNCIÓN