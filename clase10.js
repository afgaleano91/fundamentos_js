var andres = {
    nombre: 'Andres',
    apellido: 'Galeano',
    edad: '20',
    ingeniero: false,
    tester: true,
    chef: false,
    geek: true,
    gamer: true,
    guitarrista: true
}
var juan = {
    nombre: 'Juan',
    apellido: 'Galeano',
    edad: '10',
    ingeniero: false,
    tester: true,
    chef: false,
    geek: true,
    gamer: true,
    guitarrista: true
}
function imprimirProfesion(persona) {
    console.log(`${persona.nombre} :`)
    if (persona.ingeniero) {
        console.log('Es Ingeniero')
    }else{
        console.log('No es Ingeniero, lo cual es muy sad :c')
    }
    if (persona.tester) {
        console.log('Es Tester')
    } else{
        console.log('No es Tester')
    } 
    if (persona.chef) {
        console.log('Es Chef')
    } else{
        console.log('No es Chef')
    } 
    if (persona.geek) {
        console.log('Es Geek :v')
    } else{
        console.log('No es Geek :c ')
    } 
    if (persona.gamer) {
        console.log('Es Gamer UwU')
    } else{
        console.log('No es Gamer :c')
    } 
    if (persona.guitarrista) {
        console.log('Es Guitarrista lml')
    } else{
        console.log('No es Guitarrista :c')
    }
}
// cuando se escribe una constante su nombre por buena practica
// se escribe en mayuscula y con guion abajo
const MEDAD = 18

// 1 forma de declarar una funcion, en este caso declarativa

        // function esMayor(persona) {
        //     return persona.edad >= MEDAD
        // }

// 2 forma de declarar una funcion, en este caso expresiva o anonima

        // const esMayor = function (persona) {
        //     return persona.edad >= MEDAD
        // }

// 3 forma de declarar una funcion, es el uso de arrow function
// podemos usar el objeto completo o
        //const esMayor = persona => persona.edad >= MEDAD
// desesctructurar el objeto y pasar el key que necesitamos
const esMayor = ({ edad }) => edad >= MEDAD

function imprimirLegal(persona) {
    if (esMayor(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

const permitirAccess = persona => {
    if(!esMayor(persona)) {
        console.log('ACCESO DENEGADO')
    }
}
/********************RETO*************************/
const esMenorDeEdad= (persona) => !esMayor(persona)


function imprimirSiEsMenorDeEdad(persona){
    if(esMenorDeEdad(persona)==true){
        console.log(`${persona.nombre} es menor de edad`)
    }
}


imprimirProfesion(andres)
imprimirLegal(andres)

