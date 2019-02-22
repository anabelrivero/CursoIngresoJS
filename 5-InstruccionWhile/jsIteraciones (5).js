function mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while(sexo != "f" && sexo != "m")
{
	

	sexo=prompt("error, ingrese f o m.");
}

document.getElementById('Sexo').value=sexo;

alert(sexo);

}//FIN DE LA FUNCIÓN