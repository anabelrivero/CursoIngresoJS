	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorrido;

	numeroIngresado=prompt("Ingrese un numero");

	numeroIngresado=parseInt(numeroIngresado);



	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>0;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>0;numeroAnterior--)
		{
			
			if(numeroRecorrido%numeroAnterior==0)
			{
				break;
			}

			console.log(numeroAnterior);
		}

		if(numeroAnterior==1)
		{
			console.log("es primo"+numeroRecorrido);
		}
		console.log(numeroRecorrido);
	}
{




}//FIN DE LA FUNCIÓN