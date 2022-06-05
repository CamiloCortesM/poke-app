export const pokefunc = async() => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`);
    const data = await resp.json();
    return data.results;
}
