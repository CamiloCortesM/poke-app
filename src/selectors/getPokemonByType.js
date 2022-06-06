
export const getPokemonByType = (type,data) => {
        if(type===''){
            return []
        }
        return data.filter(poke =>poke.types[0].type.name===type || poke.types[1]?.type.name===type)
}
