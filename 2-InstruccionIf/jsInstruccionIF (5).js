function mostrar()
{
//tomo la edad  
	var edadUno;
	var mensaje;

	edadUno=edad.value;

	if (edadUno < 13 || edadUno > 17)
	{
		mensaje="No es adolescente";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN