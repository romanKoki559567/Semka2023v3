import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../signup/singupValidation";
import axios from "axios";

const Nastavenia = () => {
	const [values, setValues] = React.useState({
		name: "",
		email: "",
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
			// Get the token from localStorage
			const token = localStorage.getItem("token");

			// Make a POST request with the token in the headers
			await axios.post("http://localhost:8081/updateUser", values, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			window.alert("Uspesne zmenene");
		} catch (error) {
			console.error("CHyba pri vkladaní", error);
		}
	};

	const handleDelete = async (event) => {
		event.preventDefault();

		try {
			// Get the token from localStorage
			const token = localStorage.getItem("token");

			// Make a POST request with the token in the headers
			await axios.post(
				"http://localhost:8081/deleteUser",
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			window.alert("Uspesne Odstranene");
			localStorage.removeItem("token");

			navigate("/login");
		} catch (error) {
			console.error("CHyba pri vkladaní", error);
		}
	};

	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const token = localStorage.getItem("token"); // Assuming you store the token in localStorage during login
				const response = await axios.get("http://localhost:8081/getUserData", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setValues(response.data);
			} catch (error) {
				console.error("Error fetching user data", error);
			}
		};

		fetchUserData();
	}, []);

	const funTest = () => {
		return true;
	};
	return (
		<div className="homePage">
			<Nav />
			<div className="pravy-content">
				<Hlavicka />
				<div className="d-flex justify-content-center align-items-center">
					<div className="bg-white p-3 rounded w-50">
						<h2 className="text-center">Nastavte pouzivatelske udaje</h2>
						<form action="" onSubmit={handleSubmit}>
							<div className="mb-3 mt-3">
								<label htmlFor="name">
									<strong>Používatelské meno</strong>{" "}
								</label>
								<input
									type="text"
									placeholder="Meno"
									className="form-control rounded-0"
									name="name"
									value={values.name}
									onChange={handleInput}
								></input>
								{errors.name && <span className="text-danger">{errors.name}</span>}
							</div>

							<div className="mb-3">
								<label htmlFor="email">
									<strong>Email</strong>
								</label>
								<input
									type="email"
									placeholder="Email"
									className="form-control rounded-0"
									name="email"
									value={values.email}
									onChange={handleInput}
								></input>
								{errors.email && <span className="text-danger">{errors.email}</span>}
							</div>

							<button disabled={!funTest()} className="btn btn-success border w-100 rounded-0">
								<strong>Nastavit</strong>
							</button>
						</form>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="bg-white p-3 rounded w-50">
						<h2 className="text-center">Zmazanie uctu</h2>
						<form action="" onSubmit={handleDelete}>
							<button disabled={!funTest()} className="btn btn-danger border w-100 rounded-0">
								<strong>Zmazat</strong>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Nastavenia;
