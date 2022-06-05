
import { usePokemonType } from "../../hooks/usePokemonType";

import { ListPoket } from "../pokemon/ListPoket";

export const FireScreen = () => {
    const {poketFire}=usePokemonType('fire');

  return (
    <div>{poketFire ? <ListPoket data={poketFire} /> : <p>Cargando...</p>}</div>
  );
};
