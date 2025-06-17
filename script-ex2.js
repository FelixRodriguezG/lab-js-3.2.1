// 2- Pide al usuario que introduzca nombre, localidad donde vive y hobby. Que se muestre en una sola frase: "Te llamas XXX, vives en YYY, y te gusta ZZZ".
function isValidString() {
    return typeof value === 'string' && value.trim() !== '';
}

let userName = String(prompt('Hola, ¿cual es tu nombre?'));
let address = String(prompt('Y, ¿donde vives?'));
let hobby = String(prompt('Ahora, ¿dime tu hobby favorito?'));
if (isValidString(userName) || isValidString(address) || isValidString(hobby)) {
    alert('Por favor, introduce valores válidos para todos los campos.');
    userName = String(prompt('Hola, ¿cual es tu nombre?'));
    address = String(prompt('Y, ¿donde vives?'));
    hobby = String(prompt('Ahora, ¿dime tu hobby favorito?'));
} else {
   alert(`DATOS DEL USUARIO:\n\nNombre: ${userName}\nDirección: ${address}\nAfición: ${hobby}`);
}


