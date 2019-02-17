/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero;
	var segundoNumero;
	var sumar;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	primerNumero=numeroUno.value;
	segundoNumero=numeroDos.value;

	sumar=primerNumero+segundoNumero;

	alert("El resultado de la suma es "+sumar);
	
}

function restar()
{
	var valorUno;
	var valorDos;
	var resta;

	valorUno=numeroUno.value;
	valorDos=numeroDos.value;

	resta=valorUno-valorDos;

	alert("El resultado de la resta es "+resta);
}

function multiplicar()
{ 
	var numeroPrimer;
	var numeroSegundo;
	var multiplicacion;

	numeroPrimer=numeroUno.value;
	numeroSegundo=numeroDos.value;

	multiplicacion=numeroPrimer*numeroSegundo;

	alert("El resultado de la multiplicacion es "+multiplicacion);
}

function dividir()
{
	var dividendo;
	var divisor;
	var division;

	dividendo=numeroUno.value;
	divisor=numeroDos.value;

	division=dividendo/divisor;

	alert("El resultado de la division es "+division);
}

