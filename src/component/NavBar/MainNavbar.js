/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NavbarInfo from "../NavBar/NavBar.js";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";

class MainNavbar extends Component {
  state = {
    fname: [],
  };

  componentDidMount = (props) => {
    // axios.get(`http://localhost:5000/async`).then((response) => {
    //   console.log("datAuser", response);
    //   this.Arry = response.data;
    //   this.setState({ fname: this.Arry });
    this.setState.fname = props;
    // });
  };

  render() {
    let ShowNav = this.setState.fname;
    console.log("first name" + ShowNav);
    return <NavbarInfo name={this.fname}></NavbarInfo>;
  }
}

export default MainNavbar;
