import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';

class AddVacation extends Component {
	state = {
		NewVacation: []
	};
	componentDidMount = () => {};

	AddData = () => {
		let NameInput = document.getElementById('NameInput').value;
		let CountryInput = document.getElementById('CountryInput').value;
		let DescriptionInput = document.getElementById('DescriptionInput').value;
		let PriceInput = document.getElementById('PriceInput').value;
		let StartDateinput = document.getElementById('StartDateinput').value;
		let EndDateInput = document.getElementById('EndDateInput').value;
		let Urlinput = document.getElementById('urlinput').value;
		let FileInput = document.getElementById('FileInput').value;
		let follow = '';
		console.log(
			'im here',
			NameInput,
			CountryInput,
			DescriptionInput,
			PriceInput,
			StartDateinput,
			EndDateInput,
			Urlinput
		);
		axios
			.get(
				`http://localhost:5000/addvacation?name=${NameInput}&country=${CountryInput}&description=${DescriptionInput}&Price=${PriceInput}&Photo=${Urlinput}&Start_date=${StartDateinput}&End_date=${EndDateInput}&follow=${follow}`
			)
			.then((response) => {
				console.log('newData', response);
				this.Arry = response.data;
				this.setState({ NewVacation: this.Arry });
				// console.log(this.NewVacation);
			});

		window.location.href = '/MainVacation';
	};

	render() {
		return (
			<div>
				<div className="container" />
				<div id="demotext">
					<h1>welcome to your vacation</h1>
				</div>
				<div className="col-4" id="formid">
					<form>
						<div className="form-group">
							<label for="exampleInputEmail1">Name</label>
							<input
								type="text"
								class="form-control"
								id="NameInput"
								aria-describedby="emailHelp"
								placeholder="Name"
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
							<textarea class="form-control" id="DescriptionInput" rows="3"placeholder="Description" />
						</div>
						<div className="form-group row">
							<label for="number" class="col-2 col-form-label">
								Price
							</label>
							<div className="col-10">
								<input type="number" class="form-control" id="PriceInput" placeholder="In USD" />
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
						<button type="button" class="btn btn-primary" onClick={() => this.AddData()}>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddVacation;
