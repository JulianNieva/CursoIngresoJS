/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Julian Leandro Nieva
3TP
*/
function FahrenheitCentigrados () 
{
        //Declaro variables
    let temperaturaFahrenheit;
    let temperaturaCentigrados;
        
         //Se inserta el valor de la temperatura
    temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
        //Se transforma el valor a numero entero
    temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
        //Se realiza el calculo
    temperaturaCentigrados = (temperaturaFahrenheit - 32) / 1.8;
        //Se desmutra el mensaje con el resultado
    alert(temperaturaFahrenheit + " grados Fahrenheit son " + temperaturaCentigrados + " grados Centigrados")
}

function CentigradosFahrenheit () 
{
        //Declaro variables
    let temperaturaFahrenheit;
    let temperaturaCentigrados;

        //Se inserta el valor de la temperatura
    temperaturaCentigrados = document.getElementById("txtIdTemperatura").value;
        //Se transforma el valor a numero entero
    temperaturaCentigrados = parseInt(temperaturaCentigrados);
        //Se realiza el calculo
    temperaturaFahrenheit = temperaturaCentigrados * 1.8 + 32;
        //Se desmutra el mensaje con el resultado
    alert(temperaturaCentigrados + " grados Centigrados son " + temperaturaFahrenheit + " grados Fahrenheit")
}
