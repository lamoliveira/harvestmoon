import React from 'react';
import "./style.css";
import { Col, Row, Container } from "../../components/Grid";
import ImageMed from "../../components/ImageMed";
import Hero from "../../components/Hero";

const SignIn = (props) => {
	return (
		<div>
			<Hero backgroundImage="../../assets/img/crispyLeaf.jpg">
				<div id="hmLogo" className="animated shake delay-3s"><img src="../../assets/img/hm_logo4.png" />
					<h2>Orlando</h2>
				</div>>
			</Hero>
			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
						<h1 className="text-center">Login</h1>
						<br></br>
						<br></br>
					</Col>
				</Row>
				<Row>
					<Col size="lg-4 md-4 sm-12 12">
						<div className="user">
							<ImageMed name={"image"} src={"../../assets/img/crispyLeaf.jpg"}> </ImageMed>
						</div>
					</Col>
					<Col size="lg-8 md-8 sm-12 12">
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
				<Row>
					<Col size="md-12">
						<br></br>
						<br></br>
						<br></br>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignIn;