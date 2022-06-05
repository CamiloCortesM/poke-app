export const pokeUnique = async(link) => {
    const resp = await fetch(link);
    const data = await resp.json();
    const pokemon = {
        id: data.id,
        name: data.name,
        url: data.sprites.other['official-artwork'].front_default,
        backDefault: data.sprites.back_default,
        backShiny:data.sprites.back_shiny,
        frontDefault:data.sprites.front_default,
        frontShiny:data.sprites.front_shiny,
        exp: data.base_experience,
        hp: data.stats[0].base_stat,
        atack: data.stats[1].base_stat,
        defence: data.stats[2].base_stat,
        special: data.stats[3].base_stat,
        types: data.types,
        weight: data.weight,
      };
      return pokemon;
}
