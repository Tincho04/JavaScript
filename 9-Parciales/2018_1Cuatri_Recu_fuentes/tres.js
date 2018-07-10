function mostrar()
{
var precio;
var porcentaje;
var descuento;
var preciod;
var iva;
var preciof;
precio=prompt("Ingrese el precio");
porcentaje=prompt("Ingrese el porcentaje de descuento");
precio=parseInt(precio);
porcentaje=parseInt(porcentaje);

descuento=(precio*porcentaje)/100;

preciod=precio-descuento;

iva=preciod*21/100;

preciof=preciod+iva;

alert("el descuento en dinero es de: " +descuento+", el precio con el descuento es de: "+preciod+" y el IVA es de: "+iva);

document.getElementById("elPrecioFinal").value=preciof;
}
