function mostrar()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("ingrese un numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;

	if(numeroUno==numeroDos)
	{

		mensaje=("los numeros son iguales, numero #1: "+numeroUno+" numero #2: "+numeroDos);

	}else
	{

		if(numeroUno>numeroDos)
		{

			resultado=numeroUno-numeroDos;
			mensaje=("los numeros se restaron "+numeroUno+" - "+numeroDos+" = "+resultado);

		}else
		{

			resultado=numeroUno+numeroDos;
			mensaje=("los numeros se sumaron "+numeroUno+" + "+numeroDos+" = "+resultado);

		}

	}if (resultado>10)
			{

			mensaje=("La suma es "+resultado+" y supero el 10");

			}

	alert(mensaje);	
}
