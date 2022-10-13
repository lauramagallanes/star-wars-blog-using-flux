import React, {Component, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContentPersonajes = () => {

const {store, actions} = useContext(Context);

 useEffect(() => {
        actions.getListaPersonajes()
    }, []);
          

    return(
        <div className="row">
            <h1>Personajes</h1>
            
            {store.listaPersonajes.map((item, id) => <div key={id} className="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id+1) +".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender: { item.gender}</p>
    <p className="card-text">Hair color: { item.hair_color}</p>
    <p className="card-text">Eye color: { item.eye_color}</p>
    <Link className="btn btn-primary" to={"/details-personajes/"+ (id+1) } >Learn More</Link>
    <Link className="btn btn-light" to="/"><i className="far fa-heart"></i></Link>
  </div>
</div>)}
        </div>
        )
    }
    
    