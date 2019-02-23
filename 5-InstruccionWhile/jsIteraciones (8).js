function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var suma;
	var multiplicacion;
	
	var respuesta='si';
	while (1)
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero " +contador + " # :");
		numero=parseInt(numero);

		if (numero>0)
		{
			positivo=positivo+numero;

		}else{

			negativo=negativo*numero;
		}

		//acumulador=acumulador+numero;

		respuesta=prompt(" => si, para continuar");
		if(respuesta!="si")
		{
			break;
		}

		positivo=parseInt(positivo);
		

		
	}





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN