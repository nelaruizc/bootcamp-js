// Crea un array de 3 pokemons.
const pokemons = ['Pikachu', 'Charmander', 'Charizard'];

//  Muestra por consola el nombre de cada pokemon.
console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);

// Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
console.log(pokemons[0], '-', pokemons[1], '-', pokemons[2]);

console.log(pokemons.join(' - '));

//  Bonus extra: ¿Cómo se pueda hacer esto con bucles?
pokemons.forEach((pokemon) => {
    console.log(pokemon);
});

