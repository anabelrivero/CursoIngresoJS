function mostrar()
{
	var planetas;
	var mensaje;

	planetas=prompt("Dame un planeta");

	switch(planetas)
	{
		case "tierra":
		mensaje=("aca vivimos");
		break;
		case "Mercurio":
		case "venus":
		mensaje=("aca hace mas calor");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		mensaje=("aca hace mas frio");
		break;
		default:
		mensaje=("no es un planeta valido");
		break;

	}

	alert(mensaje);
}
