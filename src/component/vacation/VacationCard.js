/* eslint-disable no-unused-expressions */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaEdit, FaRegHeart, FaWindowClose } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { faEdit, faDollarSign, faHeart, faWindowClose } from '@fortawesome/free-solid-svg-icons';

const VacationCard = (props) => {
	let user = [];
	let icon = '';
	let color = 'black';
	let deleteBtn = '';
	let EditBtn = '';
	let popUp = '';
	if (props.follow === '1') {
		color = 'red';
	} else {
		props.follow === '0';
		color = 'black';
	}
	if (localStorage.user) {
		user = JSON.parse(localStorage.user);
		if (user[0].type === 1) {
			popUp = (
				<Popup trigger={<FaEdit id="editicon" />} modal closeOnDocumentClick position="center">
					<div className="col-6">
						<form>
							<div className="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input
									type="text"
									class="form-control"
									id="NameInput"
									aria-describedby="emailHelp"
									placeholder={props.name}
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Country</label>
								<input
									type="text"
									class="form-control"
									id="CountryInput"
									aria-describedby="emailHelp"
									placeholder={props.country}
								/>
							</div>
							<div className="form-group">
								<label for="exampleTextarea">Description</label>
								<textarea
									class="form-control"
									id="DescriptionInput"
									rows="3"
									placeholder={props.description}
								/>
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
										placeholder={props.Price}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									for="example-date-input"
									class="col-2 col-form-label"
									placeholder={props.Start_date}
								>
									Start
								</label>
								<div className="col-10">
									<input class="form-control" type="date" id="StartDateinput" />
								</div>
							</div>
							<div className="form-group row">
								<label
									for="example-date-input"
									class="col-2 col-form-label"
									placeholder={props.End_date}
								>
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
									<label
										for="example-url-input"
										class="col-2 col-form-label"
										placeholder={props.Photo}
									>
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
							<button type="button" class="btn btn-primary" onClick={() => props.EditHandler(props.id)}>
								Submit
							</button>
						</form>
					</div>
				</Popup>
			);
			deleteBtn = <FaWindowClose id="closeicon" onClick={() => props.DeletHandler(props.id)} />;

			// faEdit
		} else if (user[0].type === 0) {
			icon = <FaRegHeart onClick={() => props.FavoritHandler(props.id, props.follow)} style={{ color: color }} />;
		}
	}

	return (
		<div className="InfoCard">
			<Card style={{ width: '18rem' }}>
				<div className="row">
					<div >{deleteBtn}{popUp}</div>
					<div className="col-1">{icon}</div>
					<div className="col-1"id="edit"></div>
				</div>
				<Card.Img variant="top" src={props.Photo} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					{/* <Card.Text>{props.description}</Card.Text> */}
				</Card.Body>
				<Accordion defaultActiveKey="1">
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="0">
								<h3>
									<strong>Description</strong>
								</h3>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body>{props.description}</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Country: {props.country}</ListGroupItem>
					<ListGroupItem>
						price: {props.Price}
						<FontAwesomeIcon icon={faDollarSign} id="dollaricon" />
					</ListGroupItem>

					<ListGroupItem>Start date: {props.Start_date}</ListGroupItem>
					<ListGroupItem>End date: {props.End_date}</ListGroupItem>
				</ListGroup>
			</Card>
		</div>
	);
};

export default VacationCard;
