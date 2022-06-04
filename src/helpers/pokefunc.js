export const pokefunc = async() => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    const data = await resp.json();
  
    return data;
}
