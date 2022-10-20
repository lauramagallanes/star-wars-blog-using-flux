import React, {Component, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContentVehiculos = () => {

  const {store, actions} = useContext(Context);
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  useEffect(() => {
         actions.getListaVehiculos()
     }, []);
    
// if(id == 3 || id == 5 || id == 6 || id ==7)
    return(
        <div className="row">
            <h1 className="text-light">Vehiculos</h1>
            
            {store.listaVehiculos.map((item, id) => <div key={id} className="card m-3 text-light border-light" style={{width: "18rem", backgroundImage: `url("https://www.latercera.com/resizer/R3pb95xktGNvj-10L5RDBohi278=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RGYLQWSTE5B5PAQPHUQ4GKGQRM.jpg")`}}>
  <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id+1) + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Model: { item.model}</p>
    <p className="card-text">Manufacturer: { item.manufacturer}</p>
    <p className="card-text">Passengers: { item.passengers}</p>
    <Link className="btn btn-outline-light" to={"/details-vehiculos/"+ (id+1) } >Learn More</Link>{tab}{tab}{tab}{tab}
    <Link className={store.classNameFavoritos} to="/" onClick={()=> {actions.getListaFavoritos(item); actions.cambiaClassNameFavoritos(id)}}><i className="far fa-heart"></i></Link>
  </div>
</div>)}
        </div>
        )
      
    }