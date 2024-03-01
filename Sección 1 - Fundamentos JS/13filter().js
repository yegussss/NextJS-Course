const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    //filter() crea un nuevo arreglo en base al objeto asignado a la función.
    //FILTRA SIEMPRE POR UNA CONDICÓN ESTABLECIDA.
    //Crea un arreglo porque el resultado de la condición puede tener más de un resultado.
    const pokemones = data.results.filter(
      (element) => element.name !== "bulbasaur"
    );
    console.log(pokemones);
  } catch (err) {
    console.log(err);
  }
};
obtenerPokemones();
