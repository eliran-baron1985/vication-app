import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
import './login.css';

class Login extends Component {
	state = {
		users: [],
		shown: true,
		label: 'to Graph'
	};

	submit = (objectFname) => {
		console.log(objectFname);
		let newuser = objectFname;
		if(this.state.users[0].type===0){
			confirmAlert({
				title: 'welcome back ' + newuser + '!',
				buttons: [
					{
						label: 'to all vacation',
						onClick: () => (window.location.href = '/MainVacation')
					}
				]
			});
		}else if(this.state.users[0].type===1){
			confirmAlert({
				title: 'welcome back ' + newuser + '!',
				buttons: [
					{
						shown: true,
						label: 'to Graph',
						onClick: () => (window.location.href = '/Graph')
					},
					{
						label: 'to all vacation',
						onClick: () => (window.location.href = '/MainVacation')
					}
				]
			});
		}

	};
	componentDidMount = () => {};
	ChackUser = async () => {
		let mail = document.getElementById('InputFname').value;
		let password = document.getElementById('InputPassword').value;
		await axios.get(`http://localhost:5000/async?mail=${mail}&password=${password}`).then((response) => {
			this.setState({ users: response.data });
			console.log(this.state.users);
		});

		if (this.state.users.length > 0) {
			localStorage.user = JSON.stringify(this.state.users);
			let objectFname = this.state.users[0].First_Name;
			this.submit(objectFname);
		}
	};

	render() {
		function handleChange(e) {
			console.log(e.target.value);
		}

		return (
			<div>
				<div className="container" />
				<div id="demotext">
					<h1>welcome to your vacation</h1>
				</div>
				<div className="col-4" id="formid">
					<form>
						<div className="form-group">
							<label for="exampleInputEmail1">Mail</label>
							<input
								type="text"
								class="form-control"
								id="InputFname"
								aria-describedby="emailHelp"
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" class="form-control" id="InputPassword" onChange={handleChange} />
						</div>
						<div className="row">
							<button type="button" class="btn btn-outline-primary ml-5" onClick={() => this.ChackUser()}>
								login
							</button>
							<div className="col-2" id="notreg">
								{this.state.shown ? '' : 'not register yet'}
							</div>
						</div>
					</form>
					<div className="row">
						<div className="col-6 ml-3">
							<h2>not register yet?</h2>
						</div>
						<button type="button" class="btn btn-outline-danger mb-3">
							<Link to="/Register">Register</Link>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
