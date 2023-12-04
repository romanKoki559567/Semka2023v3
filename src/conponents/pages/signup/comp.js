import React, { useState } from "react";
import { Link } from "react-router-dom";

const Comp = () => {
	return (
		<div className="d-flex justify-content-center align-items-center bg-dark vh-100">
			<div className="bg-white p-3 rounded w-25">
				<form action="">
					<div className="mb-3">
						<label htmlFor="name">
							<strong>Name</strong>{" "}
						</label>
						<input type="text" placeholder="Name" className="form-control rounded-0"></input>
					</div>

					<div className="mb-3">
						<label htmlFor="password">
							<strong>Password</strong>
						</label>
						<input type="password" placeholder="Password" className="form-control rounded-0"></input>
					</div>

					<button className="btn btn-success w-30 rounded-0">
						<strong>Sign un</strong>
					</button>
					<Link to="/signup">
						<button className="btn btn-default border w-100 rounded-0">Login</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Comp;
