function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje;

	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Falta para el invierno.";
		break;
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio.";
		break;
	}

	alert (mensaje);
	console.log(mesDelAño);




}//FIN DE LA FUNCIÓN