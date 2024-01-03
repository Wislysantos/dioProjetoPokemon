
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertToHtml(pokemon){
    return`
    <ol class="pokemons">
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">  sa</li>
                <li class="type">poison</li>
            </ol>
            <img src=${pokemon.sprites.other.dream_world.front_default}
            alt="${pokemon.name}">
        </div>
    </li>
    </ol>
    `
}

const pokemonList = document.getElementById('pokedex')

pokeApi.convertToHTML().then((pokemons)=> {
    pokemonList.innerHTML += (pokemons.map(convertToHtml)).join('')
    })
    .catch((error)=> console.error(error))
    .finally(console.log('Sucesso!'))


//console.log('Sucesso!')