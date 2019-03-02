function mostrar()
{
	var velocidad;
	var velocidadSuma;
	var acumuladorVelocidad;
	var combustible;
	var combustibleLiquido;
	var combustibleSolido;
	var promedioVelocidad;
	var velocidadBaja;
	var velocidadAlta;
	var cantidadCombustibleMayor100;
	var ingreso;

	cantidadCombustibleMayor100=0;
	acumuladorVelocidad=0;
	ingreso="si";
	velocidadSuma=0;
	velocidadSuma=parseInt(velocidadSuma);
	velocidadAlta=0;


	while(ingreso=="si")
	{

		velocidad=prompt("Ingrese velocidades en kilometros");
		combustible=prompt("Ingrese el tipo de combustible, para liquido l y para solido s");
		
		velocidad=parseInt(velocidad);

		

		while(velocidad<0 || velocidad>250)
		{

			velocidad=prompt("error, ingrese velocidades en kilometros");
			velocidad=parseInt(velocidad);
		}

		while(combustible!=="s" && combustible!=="l")
		{

			combustible=prompt("Ingrese el tipo de combustible, para liquido l y para solido s" );

		}
		
		if(cantidadCombustibleMayor100==0)
		{
			combustibleBajo=combustible;
			velocidadBaja=velocidad;

		}else{

			if(velocidad<velocidadBaja)
			{
				combustibleBajo=combustible;
				velocidadBaja=velocidad;
			}
		}

			if(velocidad>100 && combustible=="l")
				{
		
					cantidadCombustibleMayor100=cantidadCombustibleMayor100+1;
					combustibleLiquido=combustible;
				}
		

		if(velocidad>velocidadAlta && combustible=="s")
		{
			velocidadAlta=velocidad;
			combustibleSolido=combustible;

		}

		ingreso=prompt("Desea continuar?");
		velocidadSuma=velocidadSuma+velocidad;
		acumuladorVelocidad=acumuladorVelocidad+1;
	}

	

	promedioVelocidad=velocidadSuma/acumuladorVelocidad;

	alert("el promedio de las velocidades totales es: "+promedioVelocidad+", las velocidades mas bajas "+velocidadBaja+" y su tipo de combustible es: "+combustibleBajo+", combustibles liquidos que su velocidad supere los 100km: "+cantidadCombustibleMayor100+" "+combustibleLiquido+"combustibles solidos mayor a 200km: "+velocidadAlta);

}
