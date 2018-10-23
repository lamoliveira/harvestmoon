import React from 'react';
import "./style.css";
import ImageMed from "../ImageMed";
import Alert from '../Alert';
//user profile 

const btnStyle = {
	float: 'left'
};


const User = (props) => {
	return (
		<div className="form-group">
			<h1>Profile</h1>	 

			<div >
				<ImageMed name={props.nickname + " image"} src={props.image}> </ImageMed>
			</div>
			<form className="search">

				<label>Profile Picture</label><br />
				<input name='image' value={props.image} onChange={props.handleChange} placeholder='Path of your picture as https://mypic.com' />
				<br />
				<input value={props.auth.userId} name='userId' hidden disabled onChange={props.handleChange} />
				<input value={props.auth.username} onChange={props.handleChange} name='username' type='email' disabled hidden />
				<label>Nickname</label><br />
				<input name='nickname' value={props.nickname} onChange={props.handleChange} />
				<br />
				<label>Address</label><br />
				<input name='address' value={props.address} onChange={props.handleChange} placeholder='your Address' />
				<br />
				<label>About you</label><br />
				<input name='description' value={props.description} onChange={props.handleChange} placeholder='Add a short bio to tell people more about yourself.' />
				<br />

				<button className='update-btn' style={btnStyle} type='submit' name="/api/users" onClick={props.handleUpdate}>Update</button>
				
				<Alert style={{ opacity: props.message ? 1 : 0 }} type="success">
							{props.message}
        		</Alert>
			</form>
		</div>
	);
};

export default User;