/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var valorUno;
	var valorDos;
	var suma;

	valorUno=numeroUno.value;
	valorDos=numeroDos.value;

	valorUno=parseInt(valorUno);
	valorDos=parseInt(valorDos);

	suma=valorUno+valorDos;

	alert("El resultado de la suma es "+suma);
}

function restar()
{
	var valorUno;
	var valorDos;
	var resta;

	valorUno=numeroUno.value;
	valorDos=numeroDos.value;

	valorUno=parseInt(valorUno);
	valorDos=parseInt(valorDos);

	resta=valorUno-valorDos;

	alert("la resta es "+resta);
}

function multiplicar()
{ 
	var valorUno;
	var valorDos;
	var multiplicar;

	valorUno=numeroUno.value;
	valorDos=numeroDos.value;

	valorUno=parseInt(valorUno);
	valorDos=parseInt(valorDos);

	multiplicar=valorUno*valorDos;

	alert("El resultado de la multiplicación es "+multiplicar);
}

function dividir()
{
	var valorUno;
	var valorDos;
	var dividir;

	valorUno=numeroUno.value;
	valorDos=numeroDos.value;

	valorUno=parseInt(valorUno);
	valorDos=parseInt(valorDos);

	dividir=valorUno/valorDos;

	alert("El resultado es "+dividir);
}

