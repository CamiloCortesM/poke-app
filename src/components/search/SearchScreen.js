import { useContext} from "react";
import { DataContext } from "../../hooks/DataContext";
import { useForm } from "../../hooks/useForm";
import { CardPoket } from "../pokemon/CardPoket";

export const SearchScreen = () => {
  const [values, handleInputChange ] = useForm({
    searchText:"",
  });

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  const data = useContext(DataContext);
  return (
    <div className="container mt-3">
      <h2>Search Pokemon</h2>
      <hr className="text-light border-2 opacity-50" />
      <div className="row">
        <div className="col-lg-5 col-md-4">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="seach a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-light mt-2" type="submit">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-lg-7 col-md-8">
          <h4>Result</h4>
          <hr />
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-sm-2 ">
            {data ? (
              data.map((pk) => {
                return <CardPoket {...pk} key={pk.id} />;
              })
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
