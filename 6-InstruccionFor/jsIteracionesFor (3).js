function mostrar()
{

	var numeroIngresado;
	var numeroPerfecto;

	numeroIngresado=prompt("Ingrese un numero");

	numeroIngresado=parseInt(numeroIngresado);

	for(numeroPerfecto=numeroIngresado/numeroIngresado;numeroPerfecto>0;numeroPerfecto++)
	{
		
		if(numeroIngresado%numeroPerfecto)
		{
			break;
		}

		//console.log(numeroPerfecto);
	}

	if(numeroPerfecto==1)
	{
		console.log("es perfecto");
	}else{

		console.log("no es perfecto");
	}



}//FIN DE LA FUNCIÓN