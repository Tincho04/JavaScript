function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor(Math.random()*(10)+1);
	random=parseInt(random);
	console.log(random);
	if(random>=9){
		alert("Excelente");
	}else
	{
		if(random<9 && random>4)
		{
			alert("Aprobò");
		} else
		{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN