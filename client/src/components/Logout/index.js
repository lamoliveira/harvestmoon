import React from 'react';
import "./style.css";

const Logout = (props) =>{
	return (
		<div>
			<h1>Logout here!</h1>
			<p>{props.auth.username}</p>
			<button onClick = {props.handleLogout}>Log Out</button>
		</div>
	);
};

export default Logout;