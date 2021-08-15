var omar = {
    nombre:"Omar",
    apellido:"Villada",
    edad: 24
};

var dario = {
    nombre:"Dario",
    apellido: "Susinsky",
    edad:27
};
function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre;
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

function imprimirNombreyEdad(persona){
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años `);
}

function birthday(persona){
    //devuelve un nuevo objeto con la edad modificada
    return{
        ...persona,
        edad:persona.edad + 1
    }
}

imprimirNombreEnMayusculas(omar);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre:"Pepito"});
imprimirNombreyEdad(dario);