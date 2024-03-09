//fetch se utiliza para leer APIs.

fetch("https://pokeapi.co/api/v2/pokemon/")
  //Espera una promesa, espera que nos devuelva los datos.
  .then((res) => {
    //Decirle que los datos sean recibidos en formato json.
    return res.json();
  })
  .then((data) => {
    //Por cada elemento dentro del arreglo, lo imprime en consola.
    data.results.forEach((element) => {
      //Podemos obtener una propiedad, en este caso quiero que muestre los nombres.
      console.log(element.name);
    });
  })
  //Muestra el error en caso de fallo, por ejemplo al no tener conexión.
  .catch((error) => console.log(error));

/*
Opción dos: 

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let arrayNombres = [];
    data.results.forEach((element) => {
      arrayNombres.push(element.name);
    });
    console.log(arrayNombres);
  })
  .catch((error) => console.log(error));

*/
