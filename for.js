var omar = {
    nombre: "omar",
    apellido: "villada",
    edad: 24,
    peso: 70
}

console.log(`Al inicio del año ${omar.nombre} pesa ${omar.peso}Kg`);

const INCREMENTO_PESO = 0.3
const DIAS = 365
const META = omar.peso - 3

const aumentarDePeso = (persona) =>{
    persona.peso += INCREMENTO_PESO
}
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

/* for(var i = 1; i <= DIAS; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(omar)
    }else if(random < 0.5){
        adelgazar(omar)
    }
} */
var dias = 0;

while(omar.peso > META){
    if(comeMucho()){
        aumentarDePeso(omar)
    }
    if(haceDeporte()){
        adelgazar(omar)
    }
    dias++;
}
console.log(`Pasaron ${dias} dias hasta que ${omar.nombre} adelgazó 3 Kg`)