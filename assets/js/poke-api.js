const pokeApi = {}

function convertPokemonApiDetailToPokemon(pokeDetail){

    const pokemon = new Pokemon();
    pokemon.num = pokeDetail.order;
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetali = (pokemon) => {
    return fetch(pokemon.url)
    .then(resp => resp.json())
    .then(convertPokemonApiDetailToPokemon)
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
