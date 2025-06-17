// 1- Pide al usuario dos números. Muestra el resultado de la resta de ambos, en pantalla y/o en consola 
let numero1 = Number(prompt('Dame el primer numero?'));
let numero2 = Number(prompt('Dame el segundo numero?'));
if (isNaN(numero1) || isNaN(numero2)) {
    alert('No has introducido un valor valido, introduce solo numeros');
    numero1 = Number(prompt('Dame el primer numero?'));
    numero2 = Number(prompt('Dame el segundo numero?'));
} else {
    alert(`El resultado de restar ${numero1} y ${numero2} es ${numero1 - numero2}`);
}

