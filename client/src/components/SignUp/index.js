import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
//sign up

const SignUp = (props) => {
	return (
		<div className="form-group">
			<h1>SIGN UP</h1>
			<Link to="/signin" >Go to sign in</Link>
			<form className="search">
				
					<label>Email</label><br />
					<input value={props.username} onChange={props.handleChange} name='username' type='email' placeholder='example@email.com' />
					<br />
					<label>Password</label><br />
					<input name='password' type='password' value={props.password} onChange={props.handleChange} />
					<br />
					<label>Nickname</label><br />
					<input name='nickname' value={props.nickname} onChange={props.handleChange} />
					<br />
					<label>Profile Picture</label><br />
					<input name='image' value={props.image} onChange={props.handleChange} placeholder='Path of your picture as https://mypic.com' />
					<br />
					<label>Address</label><br />
					<input name='address' value={props.address} onChange={props.handleChange} placeholder='your Address' />
					<br />
					<label>About you</label><br />
					<input name='description' value={props.description} onChange={props.handleChange} placeholder='Add a short bio to tell people more about yourself.' />
					<br />

					<button className='signin-btn' type='submit' name="/auth/signup" onClick={props.handleSubmit}>Sign Up</button>
			
			</form>
		</div>
	);
};

export default SignUp;