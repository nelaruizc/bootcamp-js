/*
Ejercicio 2
*/

// Crea una variable llamada nombre y asígnale tu nombre como valor.
const nombre = 'Nela';

// Crea una variable llamada edad y asígnale tu edad como valor.
const edad = 27;

// Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
const mayorEdad = true;

// Crea una variable llamada direccion y asígnale un objeto con tu dirección.
const dirección = {
    ciudad: 'Valencia',
    calle: 'Avenida larga',
    num: 24,
    puerta: 'B'
    };

// Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
const coloresFavoritos = ['verde', 'azul', 'gris'];

/*
 Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
 Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
 Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.
*/

const lenguajesFavoritos = ['JavaScript', 'Python'];

const mejorLenguaje = lenguajesFavoritos[0];
console.log(mejorLenguaje);

const peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1];
console.log(peorLenguaje);
