import { useContext, useEffect, useState } from "react";
import { getPokemonByType } from "../selectors/getPokemonByType";
import { DataContext } from "./DataContext";

export const usePokemonType = (type) => {
    const data = useContext(DataContext);
    const [poketFire, setPoketFire] = useState([]);
  
    useEffect(() => {
      if (data) {
        const pokemon = getPokemonByType(type, data);
        setPoketFire(pokemon);
      }
    }, [type,data]);
  
    return {poketFire};
}
