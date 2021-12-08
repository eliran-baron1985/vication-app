import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import axios from "axios";
import "./register.css";

class Register extends Component {
  state = {
    NewUsers: [],
    users: [],
  };
  componentDidMount = () => {
    axios.get(`http://localhost:5000/async`).then((response) => {
      console.log("datAuser", response);
      this.Arry = response.data;
      this.setState({ users: this.Arry });
    });
  };
  ChackUser = () => {
    let Fname = document.getElementById("InputFname").value;
    let Lname = document.getElementById("InputLname").value;
    let email = document.getElementById("InputMail").value;
    let phone = document.getElementById("InputPhone").value;
    let password = document.getElementById("InputPassword").value;
    JSON.stringify(this.state.users);
    console.log(this.state.users);
     axios
      .get(
        `http://localhost:5000/InstUsers?Fname=${Fname}&Lname=${Lname}&email=${email}&phone=${phone}&password=${password}`
      )
      .then((response) => {
        console.log("newuser", response);
        this.Arry = response.data;
        this.setState({ NewUsers: this.Arry });
        console.log(this.NewUsers);
      });


    window.location.href = '/'
  };
  //   });
  // };

  render() {
    function handleChange(e) {
      console.log(e.target.value);
    }

    return (
      <div>
        <div className="container"></div>
        <div id="demotext">
          <h1>welcome to your vacation</h1>
        </div>
        <div className="col-4" id="formid">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                id="InputFname"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="InputLname"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Mail</label>
              <input
                type="email"
                class="form-control"
                id="InputMail"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Phone Number</label>
              <input
                type="number"
                class="form-control"
                id="InputPhone"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Repit Password</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword"
                onChange={handleChange}
              />
            </div>
            <div className="row"></div>
          </form>
          <div className="row">
            <div className="col-4 ml-4">
              <h2>Thank you</h2>
            </div>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => this.ChackUser()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
