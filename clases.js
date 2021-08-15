class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    
    constructor (nombre, apellido, altura ){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabía que eras Desarrollador/a`)
    }
}

var omar =  new Persona('Omar', 'Villada', 1.70);
var erika =  new Persona('Erika', 'Ramirez', 1.55);
var luis =  new Desarrollador('Luis', 'Ramirez', 1.80);

omar.saludar()
erika.saludar(responderSaludo)
luis.saludar(responderSaludo)

//Otro ejemplo de funciones como parametros

function cambiarBombillo() {
    console.log('Se cambió el bombillo/foco');
  };
  
  function validarBombilloFundido(bombillo, reemplazarBombillo) {
    if (bombillo.isFundido) {
      return reemplazarBombillo();
    }
  };
  
  const bombillo = {
    enciende: false,
    isFundido: true,
  };
  
  validarBombilloFundido(bombillo, cambiarBombillo);