function sumar(num1, num2) {
  //Función convencional.
  console.log(num1 + num2);
}
sumar(33, 45);

const sumarDos = (num1, num2) => {
  //Funcion de flecha.
  console.log(num1 + num2);
};
sumarDos(19, 20);

const mostrarNum = (num1) => {
  //Se puede reducir el código, al tener un sólo parámetro, los paréntesis son opcionales.
  console.log(num1);
};
mostrarNum(10);

const sumarTres = (num1, num2) => num1 + num2;
//Regresa el valor, puede ser guardado en una constante.
//Puede reducir el código con return, omitiendo el statement.
const resultado = sumarTres(23, 42);
//Puede ser mostrado en consola llamando a la variable.
console.log(resultado);

//EX:
const mensajeGeneral = (nombre) => `Hola, soy ${nombre}.`;
const texto = mensajeGeneral("Chema");
console.log(texto);

const sumarCuatro = (num1 = 10) => "La suma es " + (num1 + 20);
//Se le asigna un valor por defecto, siempre y cuando no le pasemos un parámetro
const resultado2 = sumarCuatro();
console.log(resultado2);
