import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import UpdateBtn from "../components/UpdateBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import EditTournament from "../components/EditTournament";

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
    tournaments: [],
    selectedTournament: false,
    tournamentid: "" ,
    tournamentname: "",
    tournamentdate: "",
    tournamentrules: ""
  }};

  componentDidMount() {
    this.loadTournaments();
    console.log(this.state.tournamentname);
  }

  loadTournaments = () => {
    API.getTournaments()
      .then(res =>
        this.setState({ tournaments: res.data, tournamentid: "", tournamentname: "", tournamentdate: "", tournamentrules:"" })
      )
      .catch(err => console.log(err));
  };
  loadTournament = () => {
    API.getTournaments()
      .then(res =>
        this.setState({
          selectedTournament: true,
          tournamentid: res.data._id,
          tournamentname: res.data.tournamentname,
          tournamentdate: res.data.tournamentdate,
          tournamentrules: res.data.tournamentrules,  })
      )
      .catch(err => console.log(err));
  };
  deleteTournament = id => {
    API.deleteTournament(id)
      .then(res => this.loadTournaments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.tournamentname ) {
      API.saveTournament({
        tournamentname: this.state.tournamentname,
        tournamentdate: this.state.tournamentdate,
        tournamentrules: this.state.tournamentrules
      })
        .then(res => this.loadTournaments())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Tournaments</h1>
            </Jumbotron>
            {this.state.selectedTournament ?
              <EditTournament
                  tournamentid={ this.state.tournamentId }
                  tournamentname={ this.state.tournamentname }
                  tournamentdate={ this.state.tournamentdate }
                  tournamentrules={ this.state.tournamentrules }
                  handleChange={ this.handleInputChange }
                  handleSubmit={ this.handleFormSubmit }
                />
              :
              <button onClick={() => this.setState({selectedTournament: true})}>Add Tournament</button>
            } 
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Tournaments</h1>
            </Jumbotron>
            {this.state.tournaments.length ? (
              <List>
                {this.state.tournaments.map(tournament => (
                  <ListItem key={tournament._id}>
                    <Link to={"/tournaments/" + tournament._id}>
                      <strong>
                        {tournament.tournamentname} at {tournament.tournamentdate}
                      </strong>
                    </Link>
                    <UpdateBtn onClick={() => this.loadTournament(tournament._id)} />                   
                    <DeleteBtn onClick={() => this.deleteTournament(tournament._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tournament;
