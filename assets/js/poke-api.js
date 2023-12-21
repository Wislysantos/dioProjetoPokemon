const pokeApi = {}

pokeApi.convertToHTML = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((resp) => resp.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error))
}