var edad = 24;
// edad = edad + 1
edad += 1;

var peso = 75;
// peso = peso -2;
peso -= 2;

var sandwich = 1;
// peso = peso + sandwich;
peso += sandwich;

var jugarAlFutbol = 3;
// pesos = peso - jugarAlFutbol
peso -= jugarAlFutbol;

var pescado = 205.3;
// en este caso Math.round nos ayuda a rendondear lo valores
var totaltrespescados = Math.round(pescado * 100 * 3) / 100;

// estamos indicandole que tome el total y tenga en cuanta
// que son dos decimales y si queremos mas le indicamos (1,2....)
var totalStr = totaltrespescados.toFixed(2);

//Ahora transformaremos el resultado a flotante
var totalennumero = parseFloat(totalStr);

var pizza = 8;
var persona = 2;
var cantidadporcionesporpersona = pizza / persona
// existen diferentes tipos de parseo o transformacion !!

