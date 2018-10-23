import React from 'react';
import "./style.css";
import ImageMed from "../ImageMed";
//user profile 

const User = (props) => {
	return (
		<div className="form-group">
			<h1>Profile</h1>
			
			<form className="search">
         			<label>userid</label><br />
					<input value={props.auth.userId} name='userId' onChange={props.handleChange} disabled />
					<br />
				
					<label>Email</label><br />
					<input value={props.auth.username} onChange={props.handleChange} name='username' type='email' disabled />
					<br />
					<label>Nickname</label><br />
					<input name='nickname' value={props.nickname} onChange={props.handleChange} />
					<br />
					<label>Profile Picture</label><br />
					<input name='image' value={props.image} onChange={props.handleChange} placeholder='Path of your picture as https://mypic.com' />
					<br />
					<ImageMed name={props.nickname+" image"} src={props.image}> </ImageMed>
					<label>Address</label><br />
					<input name='address' value={props.address} onChange={props.handleChange} placeholder='your Address' />
					<br />
					<label>About you</label><br />
					<input name='description' value={props.description} onChange={props.handleChange} placeholder='Add a short bio to tell people more about yourself.' />
					<br />

					<button className='update-btn' type='submit' name="/api/users" onClick={props.handleUpdate}>Update</button>
			
			</form>
		</div>
	);
};

export default User;