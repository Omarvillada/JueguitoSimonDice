var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

for(var i = 0; i < personas.length; i++){
    console.log(`Personas: ${personas[i].nombre} mide ${personas[i].altura}`)
}

const condition = ({altura}) =>  altura > 1.8

var personasAltas = personas.filter(condition)

//arrow function que retorna un nuevo array
const pasarAlturaCms = (persona) =>({
        ...persona,
        altura: persona.altura * 100
    })


var personasCms = personas.map(pasarAlturaCms)

//var acum = 0

//for(var i = 0; i < personas.length; i++){
//    acum = acum + personas[i].cantidadDeLibros
//}

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tiene ${totalLibros} libros`)