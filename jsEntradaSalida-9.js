/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var plata;
	var sueldoFinal;

	plata=sueldo.value;

	var plata=parseInt(plata);
	var sueldoFinal=parseInt(sueldoFinal);

	sueldoFinal=plata*(1+10/100);

	resultado.value=sueldoFinal;
}
