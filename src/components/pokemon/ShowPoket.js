export const ShowPoket = ({
  atack,
  defence,
  exp,
  backDefault,
  backShiny,
  frontDefault,
  frontShiny,
  hp,
  id,
  name,
  special,
  types,
  url,
  weight,
}) => {
  return (
    <>
      <div className="col-lg-4">
        <img src={url} alt={name} />
        <div className="types">
          {types.map((tp) => {
            return (
              <span key={tp.type.url} className={`badge ${tp.type.name} me-1`}>
                {tp.type.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="col-lg-6">
        <h1 className="mb-3">{name} #{id}</h1>
        <div className="row">
          <div className="col-lg-3">
            <img
              src={backDefault}
              className="img-thumbnail bg-secondary bg-opacity-10"
              alt={name}
            />
          </div>
          <div className="col-lg-3">
            <img
              src={frontDefault}
              className="img-thumbnail bg-secondary bg-opacity-10"
              alt={name}
            />
          </div>
          <div className="col-lg-3">
            <img
              src={backShiny}
              className="img-thumbnail bg-secondary bg-opacity-10"
              alt={name}
            />
          </div>
          <div className="col-lg-3">
            <img
              src={frontShiny}
              className="img-thumbnail bg-secondary bg-opacity-10"
              alt={name}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-group mt-3">
              <li className="list-group-item list-group-item-danger">
                <b>Atack:</b> {atack}
              </li>
              <li className="list-group-item list-group-item-info">
                <b>Defence:</b> {defence}
              </li>
              <li className="list-group-item list-group-item-primary">
                <b>EXP</b> {exp}
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="list-group mt-3">
              <li className="list-group-item list-group-item-success">
                <b>HP:</b> {hp}
              </li>
              <li className="list-group-item list-group-item-warning">
                <b>Special:</b> {special}
              </li>
              <li className="list-group-item list-group-item-secondary">
                <b>Weight</b> {weight/10} <span>kg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <button className="btn btn-outline-info"
        onClick={handleReturn}
        >
          Regresar
        </button> */}
      </div>
    </>
  );
};
