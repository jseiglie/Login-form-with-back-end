import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Welcome, please follow to log in</h1>
			<button className="btn btn-primary">Log In</button>
		</div>
	);
};
