function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje="que comiences bien el año";
		break;
		case "Marzo":
			mensaje="a clases!!!.";
		break;
		case "Julio":
			mensaje="se vienen las vacaciones!!!.";
		break;
		case "Diciembre":
			mensaje="Felices Fiestas!!!.";
		break;
	}
	alert(mensaje);
	console.log(mesDelAño);




}//FIN DE LA FUNCIÓN