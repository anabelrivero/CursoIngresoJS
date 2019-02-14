function mostrar()
{
	var compra;
	var descuento;
	var masIva;

	compra=prompt("Ingrese el valor de su compra");

	descuento=compra-(compra*10/100);
	masIva=compra+(compra*21/100);

	alert("tu compra es de "+compra+" tienes un descuento del 10% queda en "+descuento+" mas el iva que es "+masIva);

}
