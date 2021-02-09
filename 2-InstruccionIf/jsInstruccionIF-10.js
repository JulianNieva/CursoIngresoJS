function mostrar()
{
	let nota;
	
	nota = Math.floor(Math.random() * 10) + 1;
	nota = parseInt(nota);

	if(nota > 8)
	{
		alert(nota + ": EXCELENTE")
	}
	else
	{
		if(nota > 3)
		{
			alert(nota + ": APROBO")
		}
		else
		{
			alert(nota + ": Vamos, la proxima se puede..")
		}
	}
	console.log(nota)
}//FIN DE LA FUNCIÓN