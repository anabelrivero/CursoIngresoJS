function mostrar()
{
//tomo la edad  
	var edadUno;
	var mensaje;

	edadUno=edad.value;


	if (edadUno <18 && estadoCivil!=="Soltero")
	{
		mensaje="es muy pequeño para no ser soltero";
	}
		
	alert(mensaje);
	


}//FIN DE LA FUNCIÓN