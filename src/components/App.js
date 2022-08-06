import "./App.css";
import axios from "axios";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      currentPlayer: {},
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }
  componentDidMount() {
    const url = "http://localhost:4000/players";
    axios
      .get(url)
      .then((res) => {
        this.setState({
          players: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper purple darken-3">
              <a href="/" className="brand-logo">
                Soccer Management
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle 
            player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
