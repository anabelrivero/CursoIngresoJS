/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt ("Inserte su lindo nombre: ");
	elNombre.value=nombre;
	//document.getElementById('elNombre').value=nombre;
	//el ejercicio no pide que lo muestre pero yo lo quiero mostrar por alert
	alert(nombre);
}

