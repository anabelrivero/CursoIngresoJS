function mostrar()
{
	//series de celulares, pedir la marca, tamaño(numero),precio.
	//mayor precio y la marca

	var marca;
	var tamaño;
	var precio;
	var calulares;
	var mayorMarca;
	var mayorPrecio;
	var promedioPrecios;
	var contadorCelu;
	var acumuladorCelu;

	contadorCelu=0;
	celulares="si";
	acumuladorCelu=0;
	mayorPrecio=0;
	promedioPrecios=0;


	while(celulares=="si")
	{

		marca=prompt("ingrese una marca");
		tamaño=prompt("ingrese un tamaño");
		precio=prompt("Ingrese un precio");	
	
		tamaño=parseInt(tamaño);
		precio=parseInt(precio);



		if(celulares==0)
		{
			mayorPrecio=precio;
			mayorMarca=marca;

		}else{

			if(precio>mayorPrecio)
			{
				mayorPrecio=precio;
				mayorMarca=marca;

			}
		}

		
		

		
		promedioPrecios=precio/contadorCelu;
		//celulares=celulares+1;
		celulares=prompt("Desea agregar algo mas?");

	}
	

	alert("el precio Mayor es "+mayorPrecio+" y la marca de su celular es :"+marca+" "+promedioPrecios
		);

}	
