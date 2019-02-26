
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Dame el ancho");
	largo=prompt("Dame el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho*2)+(largo*2);

	alert("El ancho es "+ancho+" y el largo es "+largo+" entonces tu perimetro es "+perimetro);



}
