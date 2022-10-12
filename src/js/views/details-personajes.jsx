import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [listaDetallesPersonajes, setlistaDetallesPersonajes] = useState({});
	
	const getListaDetallesPersonajes = async () => {

        try {
            const response = await fetch("https://swapi.dev/api/people/"+ params.id)
            const data = await response.json();
            console.log(data);
            // let propiedades = data.results;
            // console.log(propiedades);
            setlistaDetallesPersonajes(data);
            console.log(listaDetallesPersonajes);
			


        } catch (err) {
            console.log(err);
        }

    }
	
	useEffect(() => {
		getListaDetallesPersonajes()
	  }, []);

	return (
		<div className="jumbotron">
			<h1>prueba</h1>
			<p>{listaDetallesPersonajes.name}</p>
		</div>
	);
};

DetailsPersonajes.propTypes = {
	match: PropTypes.object
};
