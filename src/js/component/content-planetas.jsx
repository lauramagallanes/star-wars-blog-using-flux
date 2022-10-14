import React, { Component, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContentPlanetas = () => {


  const { store, actions } = useContext(Context);
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;


  return (
    <div className="row">
      <h1 className="text-light">Planets</h1>

      {store.listaPlanetas.map((item, id) => <div key={id} className="card m-3 text-light border-light" style={{ width: "18rem", backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZVmXLig2sGmj6h7RMFTXf05UBDH66S9NYg&usqp=CAU")` }}>
        {id === 0 ? <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" /> : <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"} className="card-img-top" />}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Population: { item.population}</p>
    <p className="card-text">Rotation period: { item.rotation_period}</p>
    <p className="card-text">Climate: { item.climate}</p>
          <Link className="btn btn-outline-light" to={"/details-planetas/" + (id + 1)} >Learn More</Link>{tab}{tab}{tab}
          <Link className={store.classNameFavoritos} to="/" onClick={() => {actions.getListaFavoritos(item); actions.cambiaClassNameFavoritos(item)}}><i className="far fa-heart"></i></Link>
        </div>
      </div>


      )}
    </div>
  )
}