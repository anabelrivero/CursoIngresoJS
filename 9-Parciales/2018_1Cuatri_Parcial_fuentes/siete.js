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
	notasTotal=0;
	notaBaja=0;
	

	
	while(cantidadNotas<5)
	{

		notas=prompt("Ingrese la nota");
		

		var nota=parseInt(nota);
		var notasTotal=parseInt(notasTotal);

		notasTotal=notasTotal+notas;

		sexo=prompt("Ingrese el sexo");

		

		while(notas<0 || notas>10)
		{

			notas=prompt("error, nota ingresada no valida");
		}

		while(sexo!="f" && sexo!="m")
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
			


		if (nota>=6 && sexo=="m")
		{		
			
			cantidadVarones=cantidadVarones+1;
		}

		cantidadNotas=cantidadNotas=1;
	}
	
	
	promedio=notasTotal/cantidadNotas;


	alert("El promedio de alumnos es: "+promedio+" la nota mas baja es "+notaBaja+" y su sexo es: "+sexoNotaBaja+", "+cantidadVarones+" varones sacaron mas de 5");

}
