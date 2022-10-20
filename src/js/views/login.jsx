import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Form } from "../component/form.jsx";

export const Authentication = () => {
	

	return (
		<div className="text-center mt-5">
            <Form/>
        </div>
	);
};


