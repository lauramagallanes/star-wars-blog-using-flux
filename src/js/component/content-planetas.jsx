import React, {Component, useState, useEffect} from "react";

export const ContentPlanetas = () => {


    // const [personaje, setPersonaje] = useState("");
    let [listaPlanetas, setListaPlanetas] = useState([]);

    const getListaPlanetas = async () => {

        try {
            const response = await fetch("https://swapi.dev/api/planets/")
            const data = await response.json();
            console.log(data);
            let planetas = data.results;
            console.log(planetas);
            setListaPlanetas(planetas);
            // console.log(listaPersonajes);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      getListaPlanetas()
    }, []);
    console.log(listaPlanetas);

    return(
        <div className="row">
          <h1>Planetas</h1>
            
            {listaPlanetas.map((item, id) => <div key={item.id} className="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id+1) + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>)}
        </div>
        )
    }