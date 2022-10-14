import React from "react";

import "../../styles/home.css";
import {Navbar} from "../component/navbar.jsx";

import {ContentPersonajes} from "../component/content-personajes.jsx";
import {ContentPlanetas} from "../component/content-planetas.jsx";
import {ContentVehiculos} from "../component/content-vehiculos.jsx";

export const Home = () => (
    <div>
        <div>
            
			<ContentPersonajes/>
		</div>
		<div>
			<ContentPlanetas/>
		</div>
		{/* <div>
			<ContentVehiculos/>
		</div> */}
    </div>
);
