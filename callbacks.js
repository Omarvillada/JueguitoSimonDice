const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

//Metodo de JQuery para hacer solicitudes
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un erro al obtener el personaje ${id}`);
}

//var ids = [1,2,3,4,5,6,7,8,9,10]
//var promesas = ids.map(function(id){
//   return obtenerPersonaje(ids)
//})

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  }catch (id){
    onError(id)
  }
}

obtenerPersonajes()
/*
    obtenerPersonaje(1)
    .then(personaje =>  {
        console.log(`Hola, yo soy ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`Hola, yo soy ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`Hola, yo soy ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .catch(onError)
*/
