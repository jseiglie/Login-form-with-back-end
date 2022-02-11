import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Singup = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<h2>Not a member, do sign up</h2>
			<form>
				<label for='email'>Email</label>
				<input type='text' required></input>
				<label for='password'>Password</label>
				<input type='password' required></input>
				<button className="btn btn-primary" role='submit'>Submit</button>
				<button className="btn btn-error">Cancel</button>
			</form>
		</div>
	);
};

