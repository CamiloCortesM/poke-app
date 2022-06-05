
export const getPokemonByType = (type,data) => {
        if(type===''){
            return []
        }
        data.map(pk =>console.log(pk.id,pk.types));
        return data.filter(poke =>poke.types[0].type.name===type || poke.types[1]?.type.name===type)
}
