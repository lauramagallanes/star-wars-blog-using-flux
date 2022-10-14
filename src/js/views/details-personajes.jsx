import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();



	useEffect(() => {
		actions.getDetallePersonaje(params.id)
	}, []);

	return (
		<div className="jumbotron">


			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%", background: "#282727" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title text-light">{store.detallesPersonaje?.name}</h2>
							<p className="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text text-light"><small className="text-muted">Last updated 3 mins ago</small></p>
							<h5>Name</h5><h5>{store.detallesPersonaje?.name}</h5>
						</div>
					</div>
				</div>

				<div className="container text-center">
					<div className="row row-cols-6">
						<div className="col text-light"><h5>Name</h5><h5>{store.detallesPersonaje?.name}</h5></div>
						<div className="col text-light"><h5>Birth Year</h5><h5>{store.detallesPersonaje?.birth_year
						}</h5></div>
						<div className="col text-light"><h5>Gender</h5><h5>{store.detallesPersonaje?.gender}</h5></div>
						<div className="col text-light"><h5>Height</h5><h5>{store.detallesPersonaje?.height}</h5></div>
						<div className="col text-light"><h5>Skin Color</h5><h5>{store.detallesPersonaje?.skin_color
						}</h5></div>
						<div className="col text-light"><h5>Eye color</h5><h5>{store.detallesPersonaje?.eye_color}</h5></div>
					</div>
				</div>
			</div>
			<div><img src="https://i.pinimg.com/originals/e5/7b/9d/e57b9d4790971b74b3462a533ee7669a.jpg" alt="" /></div>
		</div>
	);
};

DetailsPersonajes.propTypes = {
	match: PropTypes.object
};
