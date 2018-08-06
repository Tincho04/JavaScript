function mostrar()
{
var precio=parseInt(prompt("Ingrese el precio del producto"));
var descuento=parseInt(prompt("Ingrese el porcentaje de descuento"));
var preciof;
preciof=precio-(precio*descuento/100);
document.getElementById("elPrecioFinal").value=preciof;
}
