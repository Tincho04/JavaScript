function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
if(edad>=18)
{
    alert("Usted es un adulto");
}
if(edad>=13 && edad<=17)
{
    alert("Usted es adolescente");
}
if(edad<13)
{
    alert("Usted es un niño");
}
}//FIN DE LA FUNCIÓN