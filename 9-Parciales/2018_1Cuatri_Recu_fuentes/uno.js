
function mostrar()
{
var base;
var altura;
var superficie;
var perimetro;


base=prompt("Ingrese la Base del triangulo");
altura=prompt("Ingrese la Altura del triangulo");


base=parseInt(base);
altura=parseInt(altura);


superficie=(base*altura)/2

perimetro=base*3

alert("la superficie de su triangulo es: " + superficie + " y el perimetro es: " +perimetro);
}
