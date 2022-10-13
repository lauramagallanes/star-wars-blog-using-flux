import React, {Component, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContentPlanetas = () => {


  const {store, actions} = useContext(Context);

 

    return(
        <div className="row">
          <h1>Planetas</h1>
            
            {store.listaPlanetas.map((item, id) => <div key={id} className="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id+1) + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="btn btn-primary" to={"/details-planetas/"+ (id+1) } >Learn More</Link>
    <Link className="btn btn-light" to="/"><i className="far fa-heart"></i></Link>
  </div>
</div>)}
        </div>
        )
    }