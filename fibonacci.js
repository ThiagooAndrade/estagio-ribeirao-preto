function fibonacci(num) {
    let a = 0;
    let b = 1;
    let aux;

    while (b <= num) {
        if (b === num) {
            return true; // o numero pertence a sequência de Fibonacci
        }
        aux = b;
        b = a + b;
        a = aux;
    }
    return false; // o numero não pertence a sequência de Fibonacci
}

const numero = 20; // alterar numero
const pertence = fibonacci(numero); // resultado

if (pertence) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
