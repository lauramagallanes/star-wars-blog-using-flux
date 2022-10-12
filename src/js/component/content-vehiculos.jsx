import React, {Component, useState, useEffect} from "react";
import { Link } from "react-router-dom";

export const ContentVehiculos = () => {


    // const [personaje, setPersonaje] = useState("");
    let [listaVehiculos, setListaVehiculos] = useState([]);

    const getListaVehiculos = async () => {

        try {
            const response = await fetch("https://swapi.dev/api/vehicles/")
            const data = await response.json();
            console.log(data);
            let vehiculos = data.results;
            console.log(vehiculos);
            setListaVehiculos(vehiculos);
            // console.log(listaPersonajes);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      getListaVehiculos()
    }, []);
    console.log(listaVehiculos);

    return(
        <div className="row">
            <h1>Vehiculos</h1>
            
            {listaVehiculos.map((item, id) => <div key={item.id} className="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id+1) + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="btn btn-primary" to={"/details-vehiculos/"+ (id+1) } >Learn More</Link>
  </div>
</div>)}
        </div>
        )
    }