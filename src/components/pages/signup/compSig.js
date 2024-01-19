import React, { Component } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Validation from "./singupValidation";
import axios from "axios";

const Comp = () => {
	const isAuthenticated = !!localStorage.getItem("token");
	const [values, setValues] = React.useState({
		name: "",
		email: "",
		password: "",
		bDate: undefined,
	});

	const navigate = useNavigate();
	const [errors, setErrors] = React.useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
	};

	const handleSubmit = async (event) => {
		console.log("spuštam 'handleSubmit' sing", values);
		event.preventDefault();
		setErrors(Validation(values));

		try {
			await axios.post("http://localhost:8081/signup", values);
			navigate("/");
		} catch (error) {
			console.error("Chyba pri vkladaní", error.message);
			if (error.response && error.response.data && error.response.data.error === "Email already exists") {
				window.alert("Email already exists");
			} else {
				console.error("General error:", error);
			}
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
								<input type="" placeholder="Email" className="form-control rounded-0" name="email" onChange={handleInput}></input>
								{errors.email && <span className="text-danger">{errors.email}</span>}
							</div>

							<div className="mb-3">
								<label htmlFor="password">
									<strong>Heslo</strong>
								</label>
								<input
									type="password"
									placeholder="Heslo"
									className="form-control rounded-0"
									name="password"
									onChange={handleInput}
								></input>
								{errors.password && <span className="text-danger">{errors.password}</span>}
							</div>

							<div className="mb-3">
								<label htmlFor="date">
									<strong>Dátum Narodenia</strong>
								</label>
								<input type="date" className="form-control rounded-0" name="date" onChange={handleInput}></input>
								{errors.date && <span className="text-danger">{errors.date}</span>}
							</div>

							<button className="btn btn-success w-100 rounded-0">
								<strong>Registrovat sa</strong>
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default Comp;
