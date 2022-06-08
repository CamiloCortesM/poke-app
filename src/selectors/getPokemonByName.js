
export const getPokemonByName = (data,q = '') => {
    if(q===''){
        return [];
    }
  return data.filter(poke=>poke.name.toLowerCase().includes(q.toLowerCase()));
}
