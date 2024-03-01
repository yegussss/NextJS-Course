const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //map() crea un nuevo arreglo en base al objeto asignado a la función.
    //Sólo quiero que me regrese los nombres de cada uno de los elementos.
    const arrayNombres = data.results.map((element) => element.name);
    console.log(arrayNombres);
  } catch (err) {
    console.log(err);
  }
};
obtenerPokemones();
