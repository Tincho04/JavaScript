function mostrar()
{
var numero, i;
var primo=0, prim=0;

numero=prompt("ingrese su numero.");
numero=parseInt(numero);
while(isNaN(numero)){
    numero=prompt("Ingrese un numero válido.");
    numero=parseInt(numero);
}
for(i=1; i<=numero; i++){
    for(let j=2; j<numero; j++){
        if(numero==2){
            prim=numero;
            console.log(prim);
            break;
        } else{
        if(j%i!=0){
        primo++;

      }
        }
    }
        prim=j;
        console.log(prim);
        break;
 
}
console.log("hay tantos primos como: " + primo);
}//FIN DE LA FUNCIÓN
