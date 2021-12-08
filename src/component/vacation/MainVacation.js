/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import VacationCard from '../vacation/VacationCard';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Navbar from 'react-bootstrap/Navbar';
import './MainVacation.css';
import axios from 'axios';
import MainNavbar from '../NavBar/MainNavbar.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDollarSign, faHeart, faWindowClose } from '@fortawesome/free-solid-svg-icons';
class MainVacation extends Component {
	state = {
		Vacations: [],
		user: [],
		count: 0
	};
	componentDidMount = () => {
		if (localStorage.user) {
			this.state.user = JSON.parse(localStorage.user);
		}
		axios.get(`http://localhost:5000/ShowVacations`).then((response) => {
			this.Arry = response.data;
			console.log(this.Arry);
			this.setState({ Vacations: this.Arry });
		});
	};

	FavoritHandler = (id, follow) => {
		axios.get(`http://localhost:5000/favorits?id=${id}&follow=${follow}`).then((response) => {
			console.log('favorit', response);
			this.Arry = response.data;
			this.componentDidMount();
		});
	};

	DeletHandler = (id) => {
		axios.get(`http://localhost:5000/DeleteData?id=${id}`).then((response) => {
			console.log('RemoveResponse', response);
			this.Arry = response.data;
		});
		console.log('this is deleted', id);
		this.componentDidMount();
	};
	EditHandler = (id) => {
		let NameInput = document.getElementById('NameInput').value;
		let CountryInput = document.getElementById('CountryInput').value;
		let DescriptionInput = document.getElementById('DescriptionInput').value;
		let PriceInput = document.getElementById('PriceInput').value;
		let StartDateinput = document.getElementById('StartDateinput').value;
		let EndDateInput = document.getElementById('EndDateInput').value;
		let Urlinput = document.getElementById('urlinput').value;
		let FileInput = document.getElementById('FileInput').value;
		axios
			.get(
				`http://localhost:5000/UpdateData?id=${id}&name=${NameInput}&country=${CountryInput}&description=${DescriptionInput}&Price=${PriceInput}&Photo=${Urlinput}&Start_date=${StartDateinput}&End_date=${EndDateInput}`
			)
			.then((response) => {
				console.log('RemoveResponse', response);
				this.Arry = response.data;
				this.componentDidMount();
			});
	};

	render() {
		let ShowCsrds = this.state.Vacations.map((item, index) => {
			return (
				<div className="col-3">
					<VacationCard
						id={item.id}
						name={item.name}
						country={item.country}
						description={item.description}
						Price={item.Price}
						Photo={item.Photo}
						Start_date={item.Start_date}
						End_date={item.End_date}
						follow={item.follow}
						index={index}
						FavoritHandler={this.FavoritHandler}
						DeletHandler={this.DeletHandler}
						EditHandler={this.EditHandler}
					/>
				</div>
			);
		});

		return (
			<div>
				<MainNavbar />
				<div className="row">{ShowCsrds}</div>
				<div className="col-6" id="popupwindow">
					<div className="modal">
						<div className="modal_content">
							<div className="container" />
							<div className="col-4" id="formedit">
								<span class="close">
									<FontAwesomeIcon icon={faWindowClose} id="closeicon2" />
								</span>
								<form>
									<div className="form-group">
										<label for="exampleInputEmail1">Name</label>
										<input
											type="text"
											class="form-control"
											id="NameInput"
											aria-describedby="emailHelp"
										/>
									</div>
									<div className="form-group">
										<label for="exampleInputEmail1">Country</label>
										<input
											type="text"
											class="form-control"
											id="CountryInput"
											aria-describedby="emailHelp"
											placeholder="Enter Country"
										/>
									</div>
									<div className="form-group">
										<label for="exampleTextarea">Description</label>
										<textarea class="form-control" id="DescriptionInput" rows="3" />
									</div>
									<div className="form-group row">
										<label for="number" class="col-2 col-form-label">
											Price
										</label>
										<div className="col-10">
											<input
												type="number"
												class="form-control"
												id="PriceInput"
												placeholder="In USD"
											/>
										</div>
									</div>
									<div className="form-group row">
										<label for="example-date-input" class="col-2 col-form-label">
											Start
										</label>
										<div className="col-10">
											<input class="form-control" type="date" id="StartDateinput" />
										</div>
									</div>
									<div className="form-group row">
										<label for="example-date-input" class="col-2 col-form-label">
											End
										</label>
										<div className="col-10">
											<input class="form-control" type="date" id="EndDateInput" />
										</div>
									</div>
									<div className="form-group">
										<label for="exampleInputFile" class="col-5 col-form-label">
											<strong>File input:</strong>
										</label>
										<div className="form-group row">
											<label for="example-url-input" class="col-2 col-form-label">
												URL
											</label>
											<div className="col-9 ml-2">
												<input class="form-control" type="url" id="urlinput" />
											</div>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-12 ml-5">
											<input
												type="file"
												class="form-control-file"
												id="FileInput"
												aria-describedby="fileHelp"
											/>
										</div>
									</div>
									<button type="button" class="btn btn-warning" onClick={() => this.SaveChanges()}>
										Save
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainVacation;
