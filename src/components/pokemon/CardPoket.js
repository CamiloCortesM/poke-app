import React from "react";

export const CardPoket = ({url,id,name,types}) => {
  return (
    <div className="col mt-3 ">
      <div className="card card-Color border-light card-poket">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} #{id}</h5>
          {
            types.map(tp =>{
              return <span key={tp.type.url} className="badge text-bg-danger me-1">{tp.type.name}</span>
            })
          }
        </div>
      </div>
    </div>
  );
};
