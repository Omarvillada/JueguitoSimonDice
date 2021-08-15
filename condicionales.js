var omar = {
    nombre:"omar",
    apellido:"villada",
    edad:24,
    ingeniero:false,
    cocinero:false,
    cantante:true,
    dj:false,
    guitarrista:false,
    drone:true
}
var juan = {
    nombre:"juan",
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    }
    if(persona.cantante){
        console.log('Cantante')
    }
    if(persona.dj){
        console.log('DJ')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    }
    if(persona.drone){
        console.log('Vuela Drone')
    }
}

const MAYORIA_EDAD = 18;

function imprimirSiEsMayordeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_EDAD
const esMenorDeEdad = persona => !esMayorDeEdad(persona)

//const esMayorDeEdad = function(persona) {
  //  return persona.edad >= MAYORIA_EDAD
//}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    }
}