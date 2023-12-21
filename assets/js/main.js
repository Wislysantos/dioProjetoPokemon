
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertToHtml(pokemon){
    return`
    <ol class="pokemons">
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
        </div>
    </li>
    </ol>
    `
}

const pokemonList = document.getElementById('pokedex')
//pokemonList.innerHTML += convertToHtml()

const listItems = [];

pokeApi.convertToHTML().then((pokemonLi)=> {
        for (let i = 0; i < pokemonLi.length; i++) {
            const pokemon = pokemonLi[i];
            listItems.push(convertToHtml(pokemon));            
        }
        pokemonList.innerHTML += listItems
    })
    .catch((error)=> console.error(error))
    .finally(console.log('Sucesso!'))


//console.log('Sucesso!')