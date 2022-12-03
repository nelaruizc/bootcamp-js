const pokemons = [
    {
        nombre: 'Squirtle',
        tipoPokemon: 'agua'
    },

    {
        nombre: 'Caterpie',
        tipoPokemon: 'bicho'
    },

    {
        nombre: 'Charmander',
        tipoPokemon: 'fuego'
    }
];

pokemons.forEach((pokemon) => {
    if (pokemon.tipoPokemon === 'fuego') {
    console.log('¡Es un pokemon de fuego!')
    }
});

