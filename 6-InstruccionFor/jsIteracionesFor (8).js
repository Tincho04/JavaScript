function mostrar()
{
var numero, a=0, i;

numero=prompt("ingrese su numero.");
numero=parseInt(numero);
if(isNaN(numero)){
    numero=prompt("Ingrese un numero válido.");
    numero=parseInt(numero);
}
for(i=1; i<=numero; i++){
    if(numero%i==0){
        a++;
    }
}
if (a!=2){
    alert("Este numero no es Primo");
}else{
    alert("Este numero es primo");
}
}//FIN DE LA FUNCIÓN