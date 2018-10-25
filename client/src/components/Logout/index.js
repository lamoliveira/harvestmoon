import React from 'react';
import "./style.css";
import ImageMed from "../../components/ImageMed";

import { Col, Row, Container } from "../../components/Grid";

const Logout = (props) => {
	return (
		<div>
			<h3>Logout here!</h3>
			<Container fluid>
				<Row>
					<Col size="lg-4 md-4 sm-12 12">

						<div className="user">
							<ImageMed name={"image"} src={"../../assets/img/crispyLeaf.jpg"}> </ImageMed>
						</div>
					</Col>
					<Col size="lg-4 md-4 sm-12 12">
						<p>{props.auth.username}</p>
						<br></br>
						<button onClick={props.handleLogout}>Log Out</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Logout;