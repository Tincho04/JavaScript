function mostrar()
{
//tomo la edad  
var edad;
var adulto;
var adolescente;
var niño;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
adulto=edad>=18  
adolescente=edad>=13 && edad<=17;
niño=edad<13
if(adulto)
{
    alert("Usted es un adulto");
}
if(adolescente)
{
    alert("Usted es adolescente");
}
if(niño)
{
    alert("Usted es un niño");
}
}//FIN DE LA FUNCIÓN