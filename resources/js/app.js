document.getElementById("demo").innerHTML ="Hello JavaScript";
document.getElementById("demo").style.fontSize ="35px";

//Salida de Datos
window.alert("Hola,como estas?");
window.alert(5+2);

//colocar un mensaje por consola del navegador
console.log(6+2);

//declaracion de variables
let a,b,c; // son para cualquier variable
const M = 8; // son para constantes
a =5;
b =6;
c = a + b + M;
document.getElementById("demo").innerHTML = c;

// Tipos de datos
let num = 34; //numero entero
let name = "Alexander Luligo"; //cadena de caracteres
let km = 12.5; //numero decimal
let persona = {firtsName: "Ana",LastName:"Perez"};//Objeto

let y = 17 + "POO";//JS trata al numero como una cadena, quiere decir que lo concatena
let q = "17" + "POO";
//Operadores aritmeticos
let num1 = 8; num2 = 4;
let suma, resta, multiplicacion, division;
suma =num1 + num2;
resta = num1 - num2;
multiplicacion = num1 * num2;
division = num1 / num2;
document.getElementById("operaciones").innerHTML = "La suma es: "+suma +" | La resta es: "+resta 
+ " | La multiplicacion es: "+multiplicacion + " | La division es: "+division;

//Operadores de comparacion
let edad = 34;
document.getElementById("comparacion").innerHTML = (edad >= 18);

//Operadores logicos
let num4 = 6, num5 = 3;
document.getElementById("logicos").innerHTML = 
(num4 < 10 && num5 >1) + "<br>" + (num4 <10 && num5 <1);


//Funciones

function myFuntion(){
    document.getElementById("demo").innerHTML ="New paragraph";
    
}

