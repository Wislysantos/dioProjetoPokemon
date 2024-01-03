const pokemonList = document.getElementById('pokedex')
const loadPokemonButton = document.getElementById('LoadMore')

let offset = 0
const  limit = 10

function loadPokemonItens(offset, limit){
    pokeApi.convertToHTML(offset, limit).then((pokemons)=> {
        const newHtml = pokemons.map((pokemon) => 
            `
            <ol class="pokemons">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) =>`<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.photo}
                    alt="${pokemon.name}">
                </div>
            </li>
            </ol>
            `
        ).join('')
        pokemonList.innerHTML += newHtml
        })
        .catch((error)=> console.error(error))
        .finally(console.log('Sucesso!'))
    
}

loadPokemonItens(offset, limit)

loadPokemonButton.addEventListener('click', ()=>{
    offset += limit
    loadPokemonItens(offset, limit)
})


//console.log('Sucesso!')