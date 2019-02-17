function mostrar()
{
//tomo la edad  
	var edadUno;
	var mensaje;

	edadUno=edad.value;

	if (edadUno > 17)
	{
		mensaje="Mayor de edad";
	}else
		{
			if(edadUno <13)
			{
				mensaje="nño";
			}else{
				mensaje="adolescente";
			}
		}
		alert(mensaje);



}//FIN DE LA FUNCIÓN