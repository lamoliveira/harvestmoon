import React from 'react';
import "./style.css";
import { Col, Row, Container } from "../../components/Grid";
import ImageMed from "../../components/ImageMed";

const SignIn = (props) => {
	return (
		<div>
			<h3 class_name="text-center">Join</h3>
			<Container fluid >
				<Row>
					
				<Col size="lg-4 md-4 sm-12 12">
				<div className="user">
							<ImageMed name={"image"} src={"../../assets/img/crispyLeaf.jpg"}> </ImageMed>
						</div>
				</Col>
					<Col size="lg-4 md-4 sm-12 12">
						<form>
							<label>Email</label><br />
							<input value={props.username} onChange={props.handleChange} name='username' type='email' placeholder='example@email.com' />
							<br />
							<label>Password</label><br />
							<input name='password' type='password' value={props.password} onChange={props.handleChange} />
							<br />
							<br></br>
							<button type='submit' name="/auth/signin" onClick={props.handleSubmit}>Sign In</button>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignIn;