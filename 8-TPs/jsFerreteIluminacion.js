/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	 var lampara;
     var precio;
     var descuento;
     var marca;
     var msg;
     var importef;
     var ingresos;
     var final;

    lampara=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    lampara=parseInt(lampara);
    precio=lampara*35


    
     if (lampara>=6){                                     // ejercicio a
         descuento=(precio*50)/100;
         console.log(descuento);
         msg=("el descuento es de: " + descuento);
    }


    if (lampara==5 && marca=="ArgentinaLuz"){             // ejercicio b
        descuento=(precio*40)/100
        msg=("el descuento es de: " + descuento);
    }else
    {if(lampara==5 && marca!="ArgentinaLuz")
        {descuento=(precio*30)/100
        msg=("el descuento es de: " + descuento);}
    }

    if ((marca=="ArgentinaLuz" || marca=="FelipeLamparas") && lampara==4)   // ejercicio c
    { 
        descuento=(precio*25)/100
        msg=("el descuento es de: " + descuento);
    }else
    {if ((marca!="ArgentinaLuz" || marca!="FelipeLamparas") && lampara==4)
        {descuento=(precio*20)/100
        msg=("el descuento es de: " + descuento);
    }
    }
   
    if(lampara==3 && marca=="ArgentinaLuz")                   // ejercicio d
        { 
        descuento=(precio*15)/100
        msg=("el descuento es de: " + descuento);   
        }else
    {
        if(lampara==3 && marca=="FelipeLamparas")
        { 
        descuento=(precio*10)/100
        msg=("el descuento es de: " + descuento);
        }else
        {
            if(lampara==3 && (marca!="FelipeLamparas" || marca!="ArgentinaLuz"))
               { descuento=(precio*5)/100
                msg=("el descuento es de: " + descuento);
        }
        }
   
   
        importef=precio-descuento;                                // ejercicio e
        if(importef>120)
        {
            ingresos=(importef*10)/100
            final=importef+ingresos
            alert("IIBB Usted pagó: " + final + " siendo " + ingresos + "el impuesto que se pagó")
        }
}
document.getElementById("precioDescuento").value=msg;
}
