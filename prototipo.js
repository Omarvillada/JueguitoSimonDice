function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
        fn.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function()  {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido, ){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);
}



Persona.prototype.soyAlto = function() {
    return this.altura > 1.8 //? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}

//var omar = new Persona('Omar', 'Villada', 2.0)
//var erika = new Persona('Erika', 'Ramirez', 1.90)
