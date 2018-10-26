import React from 'react';
import "./style.css";
import ImageMed from "../../components/ImageMed";
import Hero from "../../components/Hero";
import { Col, Row, Container } from "../../components/Grid";

const Logout = (props) => {
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
						<h1 className="text-center">Logout Here!</h1>
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

						<p>{props.auth.username}</p>
						<br></br>
						<button onClick={props.handleLogout}>Log Out</button>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Logout;