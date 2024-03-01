const mascota = {
  nombre: "Bebé",
  raza: "Pitbull",
  edad: 7,
  estado: true,
};

//Se le puede asignar una propiedad a una constante
const nombreMascota = mascota.nombre;
console.log(nombreMascota);

//Deconstructuring objects.

/*
Colocamos la propiedad dentro de las llaves.
Con una coma, podemos llamar más propiedades.
*/

//EX:
const { nombre, edad, raza, estado } = mascota;

if (mascota.estado === true) {
  console.log(`El ${raza} llamado ${nombre}, tiene ${edad} años y está vivo`);
} else {
  console.log(`El ${raza} llamado ${nombre} tenía ${edad} años y está muerto`);
}
