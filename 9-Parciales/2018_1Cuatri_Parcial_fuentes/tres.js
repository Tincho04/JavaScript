function mostrar()
{
var precio, porcentaje, preciof;
precio=prompt("Ingrese el precio del producto")
precio=parseInt(precio);
porcentaje=prompt("Ingrese el porcentaje del producto");
porcentaje=parseInt(porcentaje);
preciof=precio-(precio*porcentaje/100);
document.getElementById("elPrecioFinal").value=preciof;
}
