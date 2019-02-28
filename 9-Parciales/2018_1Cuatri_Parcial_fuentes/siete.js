function mostrar()
{
	var notas;
	var sexo;
	var promedio;
	var notasTotal;
	var sexoNotaBaja;
	var notaBaja;
	var cantidadNotas;
	var cantidadVarones;

	cantidadVarones=0;
	cantidadNotas=0;

	
	while(cantidadNotas<5)
	{

		notas=prompt("Dame la nota");
		sexo=prompt("dame el sexo");

		notasTotal=notas+notasTotal;
		cantidadNotas=cantidadNotas+1;

		while(notas<0 || notas>10)
		{

			notas=prompt("error, nota ingresada no valida");
		}

		while(sexo!="f" || sexo!="m")
		{

			sexo=prompt("error, sexo ingresado no valido");
		}

		if(cantidadNotas==0)
		{

			notaBaja=notas;
			sexoNotaBaja=sexo;
		}else{

			if(notas<notaBaja)
			{

				notaBaja=notas;
				sexoNotaBaja=sexo;

			}
		}

	}

}
