function mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var descuento;
	var subtotal;
	var mensaje;
	var precioTotal;

	descuento=100;

	precioUno=prompt("Ingrese un valor");
	precioDos=prompt("Ingrese un valor");
	precioTres=prompt("Ingrese un valor");
	precioCuatro=prompt("Ingrese un valor");

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	precioCuatro=parseInt(precioCuatro);
	precioTotal=parseInt(precioTotal);

	subtotal=precioUno+precioDos+precioTres+precioCuatro;


	if(subtotal>100)
	{
		descuento=90;
	}else
	{
		if(subtotal<50)
		{
			descuento=115;

		}else
	{
		descuento=95;
	}
	}

	
	precioTotal=subtotal*descuento/100;

	if (precioUno>precioDos && precioUno>precioTres && precioUno>precioCuatro)
	{
		mensaje=("el precio es " + precioTotal+ " y el precio mayor es "+ precioUno); 
	}else
	{
		if(precioDos>precioTres && precioDos>precioCuatro)
		{

			mensaje=("el precio es "+ precioTotal+ " y el precio mayor es " + precioDos);

		}else 
		{
			if(precioTres>precioCuatro)
			{
				mensaje=("el precio es "+ precioTotal+ " y el precio mayor es " + precioTres);

			}else
			{
				if (precioCuatro)
				{
					mensaje=("el precio es "+ precioTotal +" y el precio menor es " + precioCuatro);
				}
			}
		}
	}
	
	alert(mensaje);

	
}
