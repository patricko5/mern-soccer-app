import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
  }
  submitPlayer = (e) => {
    e.preventDefault();
    console.log(
      this.firstName.current.value,
      this.lastName.current.value,
      this.phone.current.value,
      this.email.current.value
    );

    axios
      .post("http://localhost:4000/players", {
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        phone: this.phone.current.value,
        email: this.email.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="row">
        <h1 className="center"> Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstName"
                ref={this.firstName}
                type="text"
                className="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastName"
                ref={this.lastName}
                type="text"
                className="validate"
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="phone"
                ref={this.phone}
                type="text"
                className="validate"
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                ref={this.email}
                type="text"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Add Player
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default PlayerForm;
