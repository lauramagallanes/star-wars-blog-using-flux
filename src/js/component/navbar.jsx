import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();
  let history = useHistory();

  const handleLogout = () => {
    let onLogged = actions.logout();

    if(!onLogged){
      history.push("/login");
    }
  }

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
{/* aca creo un boton para login condicionado por si el usuario esta logueado-si esta logueado quiero que desaparezca */}
<div>
{!store.auth ? <Link to="/login" type="button" className="btn btn-lg btn-outline-light">Login</Link> : null}
</div>
{/* aca creo un boton para signup condicionado por si el usuario esta logueado y/o registrado-si esta logueado quiero que desaparezca */}
<div>
{!store.auth && !store.registered ? <Link to="/signup" type="button" className="btn btn-lg btn-outline-light">Signup</Link> : null}
</div>
{/* aca creo un boton para logout condicionado por si el usuario esta logueado */}
<div>
{store.auth ? <button type="button" className="btn btn-lg btn-outline-light" onClick={handleLogout}>Logout</button> : null}
</div>
</div>
</nav>
	);
};
