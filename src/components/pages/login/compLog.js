import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Validation from "./loginValidation";
import axios from "axios";
import { Formik } from "formik";

const CompLog = () => {
	const isAuthenticated = !!localStorage.getItem("token");
	const [success, setSuccess] = React.useState(false);
	const [values, setValues] = React.useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = React.useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	const handleSubmit = async (event) => {
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email);
		console.log(event.target.password);
		setErrors(Validation(values));
		event.preventDefault();
		if (email === "" || password === "") {
			return;
		}

		try {
			const response = await axios.post("http://localhost:8081/signin", values);

			if (response.data.token) {
				console.log("SignIn successful");
				localStorage.setItem("token", response.data.token);
				setSuccess(true);
			} else {
				console.log("Unexpected response:", response.data);
			}
		} catch (error) {
			alert("Nesprávny email alebo heslo");
		}
	};

	return (
		<>
			{isAuthenticated ? (
				<section>
					<Navigate to="/" />
				</section>
			) : (
				<div className="d-flex justify-content-center align-items-center">
					<div className="bg-white p-3 rounded w-50">
						<form action="" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="email">
									<strong>Email</strong>{" "}
								</label>
								<input type="" placeholder="Email" className="form-control rounded-0" onChange={handleInput} name="email" />
								{errors.email && <span className="text-danger">{errors.email}</span>}
							</div>

							<div className="mb-3">
								<label htmlFor="password">
									<strong>Password</strong>
								</label>
								<input type="password" placeholder="Password" className="form-control rounded-0" onChange={handleInput} name="password" />
								{errors.password && <span className="text-danger">{errors.password}</span>}
							</div>

							<button type="submit" className="btn btn-success w-100 rounded-0">
								<strong>Prihlasit sa</strong>
							</button>
							<Link to="/signup">
								<button className="btn btn-default border w-100 rounded-0">Registracia</button>
							</Link>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default CompLog;
