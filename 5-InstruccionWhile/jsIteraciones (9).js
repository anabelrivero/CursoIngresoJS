function mostrar()
{

	var contador=0;
	// declarar variables
	var maximoUno;
	var minimoUno;
	var respuesta='si';
	var bandera;
	bandera= "es la primera";
	

	while(respuesta!='no')
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador + " # :");
		numero=parseInt(numero);
		if(bandera=="es la primera")
		{
			maximoUno=numero;
			minimoUno=numero;
			bandera="lalala";
		}else
		{
			if (numero>maximoUno)
		{
			maximoUno=numero;
		}

		if (numero<minimoUno)
		{

			minimoUno=numero;
		}
		}

		
		
		
		respuesta=prompt(" => si, para continuar");
	}
		maximo.value=maximoUno;
		minimo.value=minimoUno;



}//FIN DE LA FUNCIÓN