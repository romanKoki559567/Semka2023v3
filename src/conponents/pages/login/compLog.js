import React, { Component } from "react";
import { Link } from "react-router-dom";
import Validation from "./loginValidation";

const CompLog = () => {
	const [values, setValues] = React.useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = React.useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(Validation(values));
	};

	return (
		<div className="d-flex justify-content-center align-items-center">
			<div className="bg-white p-3 rounded w-25">
				<form action="" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email">
							<strong>Email</strong>{" "}
						</label>
						<input type="email" placeholder="Email" className="form-control rounded-0" onChange={handleInput} name="email" />
						{errors.email && <span className="text-danger">{errors.email}</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="password">
							<strong>Password</strong>
						</label>
						<input type="password" placeholder="Password" className="form-control rounded-0" onChange={handleInput} name="password" />
						{errors.password && <span className="text-danger">{errors.password}</span>}
					</div>

					<button type="submit" className="btn btn-success w-30 rounded-0">
						<strong>Log in</strong>
					</button>
					<Link to="/signup">
						<button className="btn btn-default border w-100 rounded-0">Create Account</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default CompLog;
