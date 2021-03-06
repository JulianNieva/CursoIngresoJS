/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precioLamparas de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Julian Leandro Nieva 1°C
 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let descuento;
    let precioBruto;
    let precioFinal;
    let ingresosBrutos;
    let porcentaje;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    
    marca = document.getElementById("Marca").value;

    precioBruto = 35 * cantidadLamparas

        //A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
    /*if (cantidadLamparas > 5)
    {
        porcentaje = 50
    }
    //B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    else 
    {
        if(cantidadLamparas == 5)
        { 
            if(marca == "ArgentinaLuz")
            { 
                porcentaje = 40
            }
            else
            {
                porcentaje = 30
            }
        }
    
        else    //C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        {
            if (cantidadLamparas == 4)  
            { 
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje = 25
                }
                else
                {
                    porcentaje = 20
                }
            }
            // D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            else
            {
                if(cantidadLamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        porcentaje = 15
                    }
            
                    else 
                    {
                        if (marca == "FelipeLamparas")
                        {
                            porcentaje = 10
                        }
                        
                        else
                        {
                            porcentaje = 5
                        }
                    }
                }
            }   // Fin del else cantidadLamparas == 3
        } // Fin del else cantidadLamparas == 4
    } // Fin del else  cantidadLamparas == 5*/
    
   /* switch (cantidadLamparas)
    {
        case 1:
        case 2:
            porcentaje = 0;
            break
        case 3: //En caso de que el usuario ingrese 3 lamparitas, se ejecutara este bloque
            if (marca == "ArgentinaLuz")
            {
                porcentaje = 15;
            }
            else 
            {
                if (marca == "FelipeLamparas")
                {
                    porcentaje = 10;
                }
                
                else
                {
                    porcentaje = 5;
                }
            }
            break;
        case 4: //En caso de que el usuario ingrese 4 lamparitas, se ejecutara este bloque
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            break;
        case 5: //En caso de que el usuario ingrese 5 lamparitas, se ejecutara este bloque
        { 
            if(marca == "ArgentinaLuz")
            { 
                porcentaje = 40
            }
            else
            {
                porcentaje = 30
            }
            break;
        }
        default:    //En caso de que el usuario ingrese mas 5 lamparitas, se ejecutara este bloque
            porcentaje = 50
            break;
    } */
    
    /*if (cantidadLamparas > 5)
    {
        porcentaje = 50;
    }
    else 
    {
        if(cantidadLamparas == 5)
        { 
            switch (marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        }
        else    //C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
        {
            if (cantidadLamparas == 4)  
            { 
                switch (marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentaje = 25;
                        break;
                    default:
                        porcentaje = 20;
                        break;
                }
            }
            // D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            else
            {
                if(cantidadLamparas == 3)
                {
                    switch (marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 10;
                            break;
                        default:
                            porcentaje = 5;
                            break;
                    }
                }
            }   // Fin del else cantidadLamparas == 3
        } // Fin del else cantidadLamparas == 4
    } // Fin del else  cantidadLamparas == 5*/
 
    switch (cantidadLamparas)
    {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            switch (marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 15;
                    break;
                case "FelipeLamparas":
                    porcentaje = 10;
                    break;
                default:
                    porcentaje = 5;
                    break;
            }
            break;
        case 4:
            switch (marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;
            }
            break;
        case 5:
            switch (marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
            break;
        default:
            porcentaje = 50;
            break;
    }
    descuento = precioBruto * porcentaje / 100
    precioFinal = precioBruto - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
    //E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
    if (precioFinal > 119)
    {
        ingresosBrutos = precioFinal * 10 / 100;

        alert("Usted pago $ " + ingresosBrutos + " de IIBB")
    }
}