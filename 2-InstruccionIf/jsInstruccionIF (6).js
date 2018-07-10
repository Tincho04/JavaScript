function mostrar()
{
//tomo la edad  
var edad;
var msg;
edad=document.getElementById("edad").value;
if(edad>=18)
{
     msg=("Usted es un adulto");
} else {
    if(edad<13)
    {    
        msg=("Usted es un niño");
    }
    else
    {
        msg=("Usted es un adolescente");
    }
}
alert(msg);
}//FIN DE LA FUNCIÓN