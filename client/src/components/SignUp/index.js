import React from 'react';
import "./style.css";
import ImageMed from "../ImageMed";
import Alert from '../Alert';
import { Col, Row, Container } from "../../components/Grid";
import Hero from "../../components/Hero";

//sign up

const SignUp = (props) => {
	return (
		<div className="form-group">

			<Hero backgroundImage="../../assets/img/redLeaf.jpg">
				<div id="hmLogo" className="animated rubberBand delay-3s"><img src="../../assets/img/hm_logo4.png" />
					<h2>Orlando</h2>
				</div>
			</Hero>

			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
						<h1 className="text-center">SIGN UP</h1>
					</Col>
				</Row>

				<Row>
					<Col size="lg-4 md-4 sm-12 12">
						<div className="signup">
							<ImageMed name={props.nickname + " image"} src={props.image ? props.image : "../../assets/img/crispyLeaf.jpg"} >  </ImageMed>
						</div>
					</Col>
					<Col size="lg-8 md-8 sm-12 12">
						<form className="search">

							<label>Profile Picture</label><br />
							<input name='image' value={props.image} onChange={props.handleChange} placeholder='Path of your picture as https://mypic.com' />
							<br />

							<label>Email</label><br />
							<input value={props.username} onChange={props.handleChange} name='username' type='email' placeholder='example@email.com' />
							<br />
							<label>Password</label><br />
							<input name='password' type='password' value={props.password} onChange={props.handleChange} />
							<br />
							<label>Nickname</label><br />
							<input name='nickname' value={props.nickname} onChange={props.handleChange} />
							<br />
							<label>Address</label><br />
							<input name='address' value={props.address} onChange={props.handleChange} placeholder='your Address' />
							<br />
							<label>About you</label><br />
							<input name='description' value={props.description} onChange={props.handleChange} placeholder='Add a short bio to tell people more about yourself.' />
							<br />
							<label>Grower or just a Neighbor?</label><br />
							<select className="custom-select" value={props.type} name="type" defaultValue="Neighbor" onChange={props.handleChange}>
								<option value="Neighbor">Neighbor</option>
								<option value="Grower">Grower</option>
							</select>
							<br />
							<br></br>

							<button className='signin-btn' type='submit' name="/auth/signup" onClick={props.handleSubmit}>Sign Up</button>
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

export default SignUp;