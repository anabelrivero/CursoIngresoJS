function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje;

	switch (mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
		break;
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Este mes tiene 30 días o mas.";
		break;
	}

	alert (mensaje);
	console.log(mesDelAño);
	
	


}//FIN DE LA FUNCIÓN