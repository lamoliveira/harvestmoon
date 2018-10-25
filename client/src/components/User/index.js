import React from 'react';
import "./style.css";
import ImageMed from "../ImageMed";
import Alert from '../Alert';
import { Col, Row, Container } from "../../components/Grid";

//user profile 

const btnStyle = {
	float: 'left'
};


const User = (props) => {
	return (
		<div>
			<h3>Profile</h3>
			<Container fluid>
				<Row>
					<Col size="lg-4 md-4 sm-12 12">

						<div className="user">
							<ImageMed name={props.nickname + " image"} src={props.image ? props.image : "../../assets/img/crispyLeaf.jpg"}> </ImageMed>
						</div>
					</Col>
					<Col size="lg-8 md-8 sm-12 12">
						<form className="form-search">
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
							<br></br>
							<label>Grower or just a Neighbor?</label><br />
							<select className="custom-select" value={props.type} name="type" defaultValue="Neighbor" onChange={props.handleChange}>
								<option value="Neighbor">Neighbor</option>
								<option value="Grower">Grower</option>
							</select>
							<br />
							<br></br>
							<button className='update-btn' style={btnStyle} type='submit' name="/api/users" onClick={props.handleUpdate}>Update</button>


							<Alert style={{ opacity: props.message ? 1 : 0 }} type="success">
								{props.message}
							</Alert>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default User;