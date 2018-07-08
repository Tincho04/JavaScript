function mostrar()
{
//tomo la edad  
var edad;
var mensaje;
edad=document.getElementById("edad").value;
edad=parseInt(edad);
mensaje=edad>=18;
if(mensaje)
{
    alert("Usted es mayor de edad");
}
else
{
    alert("Usted es menor de edad");
}
}//FIN DE LA FUNCIÓN