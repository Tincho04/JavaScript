function mostrar()
{
//tomo la edad  
var edad;
var mensaje;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
mensaje=edad>=13 && edad<=17;   // ¿Como agregar dos condiciones? 
if(mensaje)
{
    alert("Usted es adolescente");
}
else
{
    alert("Usted no es adolescente");
}
}//FIN DE LA FUNCIÓN