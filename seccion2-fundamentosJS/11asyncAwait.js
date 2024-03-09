//async await:
const obtenerPokemones = async () => {
  /*
  La función intenta realizar la petición para la lista de pokemones,
  después extrae la respuesta en formato json, e imprime en consola cada uno de los nombres.
  */
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    data.results.forEach((pokemon) => {
      console.log(pokemon.name);
    });
  } catch (err) {
    //Muestra el error en caso de haber uno.
    console.log(err);
  }
};

//Mandamos a llamar la función para obtener los nombres de los pokemones extraídos.
obtenerPokemones();
