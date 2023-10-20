//Dependencias commonjs
const axios = require('axios');

const url = 'https://random-data-api.com/api/v2/addresses';
// const url = 'https://random-data-api.com/api/v2/users';
// const url = 'https://pokeapi.co/api/v2/pokemon';
//Ciudad,pais

async function getAddress() {
    try {
        const response = await axios.get(url);
        console.log(response.data.country)
        console.log(response.data.city)
    }catch (error) {

    }
}

// Ejecutando la función
getAddress()