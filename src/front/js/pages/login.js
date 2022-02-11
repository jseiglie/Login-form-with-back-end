import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<p>Log in your account</p>
			<input type='text' placeholder="email address"></input>
			<input type='password' placeholder="password"></input>
			<button className="btn btn-primary">Log In</button>
			
		</div>
	);
};
