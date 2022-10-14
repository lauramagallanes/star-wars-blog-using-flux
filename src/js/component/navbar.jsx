import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<nav className="navbar sticky-top">
			<div className="container d-flex justify-content-between">
  <div className="col">
    <Link className="navbar-brand" to="/">
      <img src="https://androidspain.es/wp-content/uploads/2015/12/Star-wars..png" alt="" style={{width: "130px", height: "80px"}} />
	
    </Link>
  </div>
  <div className="btn-group dropstart">
  <button className="btn btn-lg btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu" style={{maxWidth: "300px"}} >
    {store.listaFavoritos.map((item, id) => <li className="dropdown-item text-left" style={{fontSize: "0.6rem!important", maxWidth: "100%!important"}} key={id}>{item.name}<button type="button" className="btn btn-info btn-sm float-end nuevoBoton" onClick={() => actions.eliminarFavorito(item)}>X</button> </li>)}
    
  </ul>
</div>
</div>
</nav>
	);
};
