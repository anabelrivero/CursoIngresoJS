function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var notas;
	var mensaje;

	notas=Math.floor((Math.random()*10)+1);
	//notas=numeroRandom.value;

	if (notas >3 && notas <9)
	{
		mensaje="APROBÓ";
	}else
	{
		if(notas <4)
		{
			mensaje="Vamos, la proxima se puede";
		}else
		{
		mensaje="EXCELENTE";
		}
	}

	alert(mensaje);
	console.log(notas);


}//FIN DE LA FUNCIÓN