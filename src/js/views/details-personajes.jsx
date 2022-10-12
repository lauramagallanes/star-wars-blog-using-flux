import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPersonaje, setdetallesPersonaje] = useState({});

	const getDetallePersonaje = async () => {

		try {
			const response = await fetch("https://swapi.dev/api/people/" + params.id)
			const data = await response.json();
			console.log(data);
			// let propiedades = data.results;
			// console.log(propiedades);
			setdetallesPersonaje(data);
			console.log(detallesPersonaje);



		} catch (err) {
			console.log(err);
		}

	}

	useEffect(() => {
		getDetallePersonaje()
	}, []);

	return (
		<div className="jumbotron">


			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">{detallesPersonaje?.name}</h2>
							<p className="card-text">orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
				
				<div className="container text-center">
					<div className="row row-cols-6">
						<div className="col text-danger"><h5>Name</h5><h5>{detallesPersonaje?.name}</h5></div>
						<div className="col text-danger"><h5>Birth Year</h5><h5>{detallesPersonaje?.birth_year
						}</h5></div>
						<div className="col text-danger"><h5>Gender</h5><h5>{detallesPersonaje?.gender}</h5></div>
						<div className="col text-danger"><h5>Height</h5><h5>{detallesPersonaje?.height}</h5></div>
						<div className="col text-danger"><h5>Skin Color</h5><h5>{detallesPersonaje?.skin_color
						}</h5></div>
						<div className="col text-danger"><h5>Eye color</h5><h5>{detallesPersonaje?.eye_color}</h5></div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailsPersonajes.propTypes = {
	match: PropTypes.object
};
