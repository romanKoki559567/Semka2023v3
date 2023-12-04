import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./singupValidation";

const Comp = () => {
	const [values, setValues] = React.useState({
		name: "",
		email: "",
		password: "",
		passwordRepet: "",
		bDate: ""
	});

	const [errors, setErrors] = React.useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
	};

	console.log(values)

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(Validation(values));
	};

	return (
		<div className="d-flex justify-content-center align-items-center bg-dark vh-100">
			<div className="bg-white p-3 rounded w-25">
				<h2>Sign-Up</h2>
				<form action="" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name">
							<strong>Používatelské meno</strong>{" "}
						</label>
						<input type="text" placeholder="Meno" className="form-control rounded-0" name="name" onChange={handleInput}></input>
						{errors.name && <span className="text-danger">{errors.name}</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="email">
							<strong>Email</strong>
						</label>
						<input type="email" placeholder="Email" className="form-control rounded-0" name="email" onChange={handleInput}></input>
						{errors.email && <span className="text-danger">{errors.email}</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="password">
							<strong>Heslo</strong>
						</label>
						<input type="password" placeholder="Heslo" className="form-control rounded-0" name="password" onChange={handleInput}></input>
						{errors.password && <span className="text-danger">{errors.password}</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="password-repet">
							<strong>Over heslo</strong>
						</label>
						<input
							type="password"
							placeholder="Zopakuj heslo"
							className="form-control rounded-0"
							name="passwordRepet"
							onChange={handleInput}
						></input>
						{errors.passwordRepet && <span className="text-danger">{errors.passwordRepet}</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="">
							<strong>Dátum Narodenia</strong>{" "}
						</label>
						<input type="date" className="form-control rounded-0" name="bDate" onChange={handleInput}></input>
						{errors.date && <span className="text-danger">{errors.date}</span>}
					</div>

					<button className="btn btn-success w-30 rounded-0">
						<strong>Sign un</strong>
					</button>
					<Link to="/">
						<button type="submit" className="btn btn-default border w-100 rounded-0">Login</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Comp;
