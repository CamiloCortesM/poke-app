export const getPokemonById = (data, id) => {
  return data.find((poke) => poke.id === parseInt(id));
};
