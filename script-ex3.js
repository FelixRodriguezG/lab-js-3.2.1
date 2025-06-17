// Mostrar el resultado del cálculo del área para ese radio, mediante la frase: “el área de un círculo con radio X es: XXX” . Debe haber tres variables: radio, pi y área.

// Test: para un radio de 22, el área es aprox. 1520.

let radio = Number(prompt('Dame el area del circulo y calcularemos su area')); 
const pi = Math.PI;
let area = Number(Math.PI * radio * radio).toFixed(4); // Alternativa para las potencias => Math.pow(radio, 2)

if (isNaN(radio)) {
    alert('No has introducido un valor valido, introduce solo numeros');
    radio = Number(prompt('Dame el area del circulo y calcularemos su area')); 
} else {
    alert(`Edasl área de un círculo con radio ${radio} es: ${area}.`);
}