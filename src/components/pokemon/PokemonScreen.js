import { useParams } from "react-router-dom";
import { usePokemonId } from "../../hooks/usePokemonId";
import { ShowPoket } from "./ShowPoket";

export const PokemonScreen = () => {
  const { pokeId } = useParams();
  const data = usePokemonId(pokeId);
  return (
    <div className="row mt-5 justify-content-around">
        {data && <ShowPoket {...data}/>}
    </div>
  );
};
