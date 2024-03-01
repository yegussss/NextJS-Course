//Declaring Objects.

const mascota = {
  nombre: "Bebé",
  raza: "Pitbull",
  edad: 7,
  estado: true,
};

console.log(mascota);
//Se accede a la propiedad con un punto.
console.log(mascota.nombre);
mascota.id = 1;
//Se le asigna la propiedad 'id' fuera del objeto
console.log(mascota);

//Agregar una propiedad de tipo "Array" (La agregué dentro de un objeto para dificultad.)
mascota.caracteristicas = {
  patas: 4,
  manchas: ["Cabeza", "Pierna derecha", "Espalda"],
  color: "Café",
};
//Se puede llamar por índice del arreglo.
console.log(mascota.caracteristicas.manchas[1]);
