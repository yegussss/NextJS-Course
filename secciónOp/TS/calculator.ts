type operation = 'add'| 'multiply' | 'divide' | 'substract';
type resultado = number;

const calculator = (a: number, b: number, op: operation): resultado=> {

    if (op === 'add') return a+b;
    if (op === 'multiply') return a*b;

    if (op === 'divide') {
     if (b === 0) {
        throw new Error('No se puede dividir entre cero');
     } else {
        return a/b
     } 
    }

    if (op === 'substract') return a-b;

    throw new Error('Operación no válida');
}

try {
    console.log(calculator(1, 0, 'divide'));
} catch (err) {
    console.log(err);
}