import React from "react";
import { usePokemonType } from "../../hooks/usePokemonType";
import { ListPoket } from "../pokemon/ListPoket";

export const GroundScreen = () => {
  const poketFire = usePokemonType("ground");
  return (
    <div>{poketFire ? <ListPoket data={poketFire} /> : <p>Cargando...</p>}</div>
  );
};
