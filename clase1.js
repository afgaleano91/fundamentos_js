// en el mismo renglon puedo declarar varias variables
// asginar valor solo se separa por comas
var nombre = 'Uso de var', apellido = 'Como la ves';

// me permite dejar nombres en mayusculas
var nombreEnMayus = nombre.toUpperCase();
// me permite dejar en minusculas 
var apeelidoEnMin = apellido.toLowerCase();
console.log(nombreEnMayus, apeelidoEnMin);

// saber el primer caracter de un string
var primeraLetradestring = nombre.charAt(0);

//cantidad de letras del una palabra
var lengthnombre = nombre.length;

// concatenar usando interpolacion
var frasecompleta = `${nombre} ${apellido.toUpperCase()}` //tambien se puede llamar una funcion dentro de las llaves

// subStr permite sacar solo un conjunto de letras de algun string
var srt = nombre.substr(0, 3);


