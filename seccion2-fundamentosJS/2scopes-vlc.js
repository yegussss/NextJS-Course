let num = 15; //Global

/*Scope/alcance de una variable, 
en este caso num2 sólo existe dentro de una condicional*/

if (true) {
  let num2 = 20;
  console.log(num);
  console.log(num2);
}

console.log(num);
//console.log(num2); Error, ya q sólo esta dentro del scope de la condicional.
