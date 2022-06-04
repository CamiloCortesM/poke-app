export const pokeUnique = async(link) => {
    const resp = await fetch(link);
    const data = await resp.json();
    const pokemon = {
        id: data.id,
        name: data.name,
        url: data.sprites.other.dream_world.front_default,
        exp: data.base_experience,
        hp: data.stats[0].base_stat,
        atack: data.stats[1].base_stat,
        defence: data.stats[2].base_stat,
        special: data.stats[3].base_stat,
      };

      return pokemon;
}
