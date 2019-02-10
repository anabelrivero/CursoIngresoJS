/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var aumento;
	var descuento;

	aumento=importe.value;

	var aumento=parseInt(aumento);
	var descuento=parseInt(descuento);

	descuento=aumento*75/100;

	resultado.value=descuento;


}
