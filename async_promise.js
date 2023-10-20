//Dependencias commonjs
const axios = require('axios');

// const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';
const url = 'https://pokeapi.co/api/v2/pokemon';

// hace una función asincronica
axios.get(url)
.then((response) => {
    let pokemones = response.data.results
    pokemones.forEach((pokemon) => {
        console.log(pokemon.name);
        console.log('------------');
    })
}).catch((error) => {
    console.log(error);
})