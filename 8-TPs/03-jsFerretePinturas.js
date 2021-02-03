/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempF;
    let tempC;

    tempF = document.getElementById("txtIdTemperatura").value;

    tempF = parseInt(tempF);

    tempC = (tempF - 32) / 1.8;

    alert(tempF + " grados Fahrenheit son " + tempC + " grados Centigrados")
}

function CentigradosFahrenheit () 
{
    let tempF;
    let tempC;
    
    tempC = document.getElementById("txtIdTemperatura").value;

    tempC = parseInt(tempC);

    tempF = tempC * 1.8 + 32;

    alert(tempC + " grados Centigrados son " + tempF + " grados Fahrenheit")
}
