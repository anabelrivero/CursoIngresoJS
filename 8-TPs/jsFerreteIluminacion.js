/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	

	var cantidades;
	var lamparitas;
	var precioBruto;
	var descuento;
	var porcentaje;
	var marcaUno;
	var ingresosBrutos;
	

	marcaUno=marca.value;
	cantidades=cantidad.value;

	porcentaje=100;
	lamparitas=35;
	lamparitas=parseInt(lamparitas);

	precioBruto=cantidades*lamparitas;

	if (cantidades >5)
	{
		porcentaje=50;
	}else{

		if (cantidades==5)
		{

			if (marcaUno=="ArgentinaLuz")
			{
				porcentaje=60;
					
			}else{

				porcentaje=70;
			}
		}else{

			if (cantidades==4)
			{

				if (marcaUno=="ArgentinaLuz" || marcaUno=="FelipeLamparas")
				{
					porcentaje=75;

				}else{

					porcentaje=80;
				}

			}else{
				
				if(cantidades==3)
				{

					if(marcaUno=="ArgentinaLuz")
					{

						porcentaje=85;
					}else{

						if(cantidades==3 && marcaUno=="FelipeLamparas")
						{

							porcentaje=90;
						}else {

						porcentaje=95;
				}
					}
				}
			}
		}
	}	
	

descuento=precioBruto*porcentaje/100;
precioDescuento.value=descuento;
alert(descuento);
	
	if (descuento > 120)
	{

		ingresosBrutos=descuento*10/100;
		alert("Usted pago "+ingresosBrutos+" de IIBB");
	}
}