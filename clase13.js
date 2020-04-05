var andres = {
    nombre: 'Andres',
    apellido: 'Galeano',
    edad: 20,
    peso: 64
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`)

// function aumentarDePeso(persona) {
//     return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (let i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random();
    
    if (random < 0.25) {
        //aumento de peso
        aumentarDePeso(andres)
    } else if (random < 0.5) {
        //adelgazar
        adelgazar(andres)
    }
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} kg`)
