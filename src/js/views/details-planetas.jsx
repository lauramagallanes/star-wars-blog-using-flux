import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getDetallePlaneta(params.id)
	}, []);

	return (
		<div className="jumbotron">

			
			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%", margin: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">{store.detallesPlaneta?.name}</h2>
							<p className="card-text">orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
				<div className="container text-center">
  <div className="row row-cols-6">
    <div className="col text-danger"><h5>Name</h5><h5>{store.detallesPlaneta?.name}</h5></div>
    <div className="col text-danger"><h5>Population</h5><h5>{store.detallesPlaneta?.population
}</h5></div>
    <div className="col text-danger"><h5>Rotation Period</h5><h5>{store.detallesPlaneta?.rotation_period}</h5></div>
    <div className="col text-danger"><h5>Surface Water</h5><h5>{store.detallesPlaneta?.surface_water}</h5></div>
	<div className="col text-danger"><h5>Gravity</h5><h5>{store.detallesPlaneta?.gravity
}</h5></div>
	<div className="col text-danger"><h5>Climate</h5><h5>{store.detallesPlaneta?.climate}</h5></div>
  </div>
</div>
			</div>
		</div>
	);
};

DetailsPlanetas.propTypes = {
	match: PropTypes.object
};