//Dependencias commonjs
const request = require('request');

const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';
// const url = 'https://pokeapi.co/api/v2/pokemon';
// MI API: https://random-data-api.com/api/v2/addresses

let r = request(url, {json: true}, (error, response, body) => {
    let dinosaurios = body
    dinosaurios.forEach((dinosaurio) => {
        console.log(dinosaurio.Name);
        console.log('----------')
    })
}); // () => {} Eso es un callback