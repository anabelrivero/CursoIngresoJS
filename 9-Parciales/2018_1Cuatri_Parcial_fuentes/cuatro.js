function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese otro numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		mensaje=("los numeros son iguales"+numeroUno+" "+numeroDos)
	}else 
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
		}else
		{	
			resultado=numeroUno+numeroDos;
		}
	} if(resultado>10)
	{
		mensaje=("la suma es "+resultado+" y supero el 10");
	}

alert(mensaje);
}
