
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;



fetch(url)
    .then((resp)=> resp.json())
    .then((jsonBody)=> console.log(jsonBody))
    .catch((error)=> console.error(error))
    .finally(console.log('Sucesso!'))


//console.log('Sucesso!')