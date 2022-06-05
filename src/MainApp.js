import { useEffect, useState } from "react";
import { pokefunc } from "./helpers/pokefunc";
import { DataContext } from "./hooks/DataContext";
import { useFetchPokemon } from "./hooks/useFetchPokemon";
import AppRoutes from "./routes/AppRoutes";

const MainApp = () => {
  const [poke, setPoke] = useState([]);
  const data = useFetchPokemon(poke);
  console.log(data);
  useEffect(() => {
    pokefunc().then((data) =>
      data.map((content) => setPoke((p) => [...p, content.url]))
    );
  }, []);

  return (
    <DataContext.Provider value={data}>
      <AppRoutes />
    </DataContext.Provider>
  );
};

export default MainApp;
