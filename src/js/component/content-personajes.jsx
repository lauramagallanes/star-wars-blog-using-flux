import React, {Component, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ContentPersonajes = () => {

const {store, actions} = useContext(Context);
const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
          

    return(
        <div className="row">
            <h1 className="text-light">Characters</h1>
            
            {store.listaPersonajes.map((item, id) => <div key={id} className="card m-3 text-light border-light" style={{width: "18rem", backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtsXB3_sb3oLYNdewnudwHW3JUMH7lv2ehw&usqp=CAU")`}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id+1) +".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Gender: { item.gender}</p>
    <p className="card-text">Hair color: { item.hair_color}</p>
    <p className="card-text">Eye color: { item.eye_color}</p>
    <Link className="btn btn-outline-light" to={"/details-personajes/"+ (id+1) } >Learn More</Link>{tab}{tab}{tab}{tab}
    <Link className= {store.classNameFavoritos} to="/" onClick={()=> {actions.getListaFavoritos(item); actions.cambiaClassNameFavoritos(id)}}><i className="far fa-heart"></i></Link>
  </div>
</div>)}
        </div>
        )
    }

    
    
    