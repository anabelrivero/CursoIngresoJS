function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Dame el precio");
	descuento=prompt("dame el descuento");

	precioFinal=precio-(precio*descuento/100);

	elPrecioFinal.value=precioFinal;
}
