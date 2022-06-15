import React from "react";
import { Link } from "react-router-dom";

export const CardPoket = ({url,id,name,types}) => {
  return (
    <div className="col mt-3 ">
      <Link to={`/pokemon/${id}`} 
      style={{ textDecoration: "none", color: "#000" }}>
      <div className="card card-Color border-light card-poket animate__animated animate__fadeIn">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} #{id}</h5>
          {
            types.map(tp =>{
              return <span key={tp.type.url} className={`badge ${tp.type.name} me-1`}>{tp.type.name}</span>
            })
          }
        </div>
      </div>
      </Link>
    </div>
  );
};
