/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const NavbarInfo = (props) => {
	let user = [];
	let details = '';
	if (localStorage.user) {
		user = JSON.parse(localStorage.user);
		if (user[0].type === 1) {
			details = (
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Logout <span class="sr-only"></span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/AddVacation">
							Add Vacations
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="/MainVacation">
							All Vacation
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link " href="/Graph">
							Graph
						</a>
					</li>
				</ul>
				
			);
		} else if (user[0].type === 0) {
			details = (
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Logout <span class="sr-only" />
						</a>
					</li>
				</ul>
			);
		}
	}
	return (

		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				welcome {user[0].First_Name}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{details}
			</div>
		</nav>
	);
};

export default NavbarInfo;
