import { usePokemonType } from "../../hooks/usePokemonType";
import { ListPoket } from "../pokemon/ListPoket";

export const WaterScreen = () => {
  const poketFire = usePokemonType("water");
  return (
    <div>{poketFire ? <ListPoket data={poketFire} /> : <p>Cargando...</p>}</div>
  );
};
