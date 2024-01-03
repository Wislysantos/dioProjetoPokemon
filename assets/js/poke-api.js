const pokeApi = {}

pokeApi.getPokemonDetali = (pokemon) => {
    return fetch(pokemon.url).then(resp => resp.json())
}

pokeApi.convertToHTML = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((resp) => resp.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetali))
    .then((detaliRequests) => Promise.all(detaliRequests))
    .then((pokemonDetali) => pokemonDetali)
    .catch((error) => console.error(error))
}
