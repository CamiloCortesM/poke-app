import { useContext } from "react";
import { getPokemonById } from "../selectors/getPokemonById";
import { DataContext } from "./DataContext";

export const usePokemonId = (id) => {
  const data = useContext(DataContext);
  if (data.length === 200) {
    const pokemon = getPokemonById(data, id);
    return pokemon;
  }
};
