import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
            <h1>Congrats! you signed in</h1>
            <p>and now you are able to sign out! Yay!</p>
            <button className="btn btn-primary">sign out</button>
        </div>
	);
};

