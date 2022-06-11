import { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { ListPoket } from "./pokemon/ListPoket";

export const Home = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <ListPoket data={data} />
    </div>
  );
};
