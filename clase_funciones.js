// var nombre = 'Andres', edad = 25;

// function imprimirEdad(n, e) {
//     console.log(`${n} tiene ${e} años`)
// }

// imprimirEdad(nombre, edad)


// var nombre = 'Andres'

// function mostrarEnMayus(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// mostrarEnMayus(nombre)

var josefa = {
    nombre: 'Josefa',
    apellido: 'Misles',
    edad: 34
}
var fabian = {
    nombre: 'fabian',
    apellido: 'sastoque',
    edad: 45
}

// function imprimirnombre(persona) {
//     // var nombre = persona.nombre
//     var { nombre } = persona
//     console.log(nombre.toUpperCase())
// }

// imprimirnombre(josefa)
// imprimirnombre(fabian)
// // podemo definir un nuevo objeto dentro de las funcion
// imprimirnombre({ nombre: 'Sergio' })
// imprimirnombre()

// function printNameAge(nameage){
//     var { nombre, edad } = nameage
//     console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
// }

// printNameAge(josefa);
// printNameAge(fabian);


function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
    