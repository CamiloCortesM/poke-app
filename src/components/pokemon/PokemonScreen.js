import { useParams } from "react-router-dom";
import { usePokemonId } from "../../hooks/usePokemonId";

export const PokemonScreen = () => {
    const { id } = useParams();
    const data = usePokemonId(id);
  return (
    <>
    {data && <h1>{data.name}</h1>}
    </>
  );
};
