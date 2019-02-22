function mostrar()
{
	var habitacion;
	var descuento;
	var tipoPago;
	var paquetes;
	var descuento;
	var precioHabitacion;
	var precioTotal;

	descuento=100;

	habitacion=prompt("¿Que tipo de habitacion?");
	precioHabitacion=prompt("Ingrese precio de la habitacion");
	tipoPago=prompt("¿como desea pagar?");
	paquetes=prompt("¿que tipo de paquete desea?");


	switch (tipoPago)
	{
		case "visa":
		case "mercadoPago":
		descuento=90;
		break;
		case "paypal":
		descuento=85;
		break;
		case "efectivo":
		descuento=80;
		break;
		case "otros":
		descuento=95;

		break;	
	}
	
	precioTotal=tipoPago+paquetes;
	alert(precioTotal);
}
