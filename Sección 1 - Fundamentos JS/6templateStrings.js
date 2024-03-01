/*
---Concatenar convencionalmente.---

const numero = (num) => "El número es " + num;
const resultado = numero(5);
console.log(resultado);

*/

//Template String

const mensajeGeneral = (nombre) => `Hola, soy ${nombre}.`;
const texto = mensajeGeneral("Chema");
console.log(texto);
