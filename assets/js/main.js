
function convertToHtml(pokemon){
    return`
    <ol class="pokemons">
    <li class="pokemon">
        <span class="number">#${pokemon.num}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) =>`<li class=type>${type}</li>`).join('')}
            </ol>
            <img src=${pokemon.photo}
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