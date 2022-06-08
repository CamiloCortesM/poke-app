import { useContext } from "react";
import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../hooks/DataContext";
import { useForm } from "../../hooks/useForm";
import { CardPoket } from "../pokemon/CardPoket";
import { getPokemonByName } from "../../selectors/getPokemonByName";

export const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

 const {q=''} = queryString.parse(location.search);
 
  const [values, handleInputChange] = useForm({
    searchText: q,
  });
  const data = useContext(DataContext);
  const { searchText } = values;

  const pokeData = getPokemonByName(data,q);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };


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
              placeholder="seach a Pokemon"
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
            {
              q==='' ? <div className="alert alert-info col-lg-12 col-md-12 col-12 col-sm-12">Search a Pokemon</div>
              : (pokeData.length===0) && <div className="alert alert-danger col-lg-12 col-md-12 col-12 col-sm-12">Pokemon No Found</div>
            }
            {pokeData ? (
              pokeData.map((pk) => {
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
