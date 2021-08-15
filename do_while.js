var contador = 0
//arrow function
const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())    
var veces = contador <= 1 ? 'Vez':'Veces'
console.log(`Fui a ver si llovia ${contador} ${veces}`)