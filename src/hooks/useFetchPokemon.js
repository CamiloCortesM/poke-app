import { useEffect, useState } from "react";
import { pokeUnique } from "../helpers/pokeUnique";

export const useFetchPokemon = (poke) => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        poke.map(url=>{
            return pokeUnique(url)
            .then(data=>{
                setPokemon(p=>[...p,data]);
            })
        })
    }, [poke])
    
        return pokemon

}
