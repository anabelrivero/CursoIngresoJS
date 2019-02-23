function mostrar()
{

	var contador=0;
	var acumulador;
	var cantidad;
	var positivos;
	var negativos;
	var numeroPares;
	var promedio;
	var diferencia;
	var numero;

	positivos=parseInt(positivos);
	negativos=parseInt(negativos);
	numeroPares=parseInt(numeroPares);
	promedio=parseInt(promedio);
	cantidad=parseInt(cantidad);
	diferencia=parseInt(diferencia);

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=parseInt(numero);
		contador=contador+1;
		respuesta=prompt("Ingrese el numero");

		if (numero)
		{

			positivos=positivos+numero;

		}else {
			negativos=negativos-numero;
		}if()

	}




}//FIN DE LA FUNCIÓN