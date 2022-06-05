import React from "react";

export const CardPoket = ({url,id,name}) => {
  return (
    <div className="col mt-3">
      <div className="card card-Color border-light">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} #{id}</h5>
        </div>
      </div>
    </div>
  );
};
