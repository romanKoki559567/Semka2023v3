import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Validation from "./settingsValidation";
import axios from "axios";

const Nastavenia = () => {
	const isAuthenticated = !!localStorage.getItem("token");
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const [errors, setErrors] = useState({});

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setErrors(Validation(values));

		try {
			const token = localStorage.getItem("token");

			await axios.patch("http://localhost:8081/updateUser/", values, {
				headers: {
					Authorization: `${token}`,
				},
			});
			window.alert("Uspesne zmenene");
		} catch (error) {
			console.error("Chyba pri vkladaní", error);
		}
	};

	const handleDelete = async (event) => {
		event.preventDefault();

		try {
			const token = localStorage.getItem("token");

			await axios.delete("http://localhost:8081/deleteUser", {
				headers: {
					Authorization: `${token}`,
				},
			});
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
				const token = localStorage.getItem("token");
				const response = await axios.get("http://localhost:8081/getUserData", {
					headers: {
						Authorization: `${token}`,
					},
				});
				setValues(response.data);
			} catch (error) {
				console.error("Error fetching user data", error);
			}
		};

		fetchUserData();
	}, []);

	return (
		<>
			{!isAuthenticated ? (
				<section>
					<Navigate to="/" />
				</section>
			) : (
				<div className="homePage">
					<Nav />
					<div className="pravy-content">
						<Hlavicka />
						<div className="d-flex justify-content-center align-items-center">
							<div className="bg-white p-3 rounded w-50">
								<h2 className="text-center">Nastavenie používateľských údajov </h2>
								<form action="" onSubmit={handleSubmit}>
									<div className="mb-3">
										<label htmlFor="name">
											<strong>Používatelské meno</strong>{" "}
										</label>
										<input
											type="text"
											placeholder="Meno"
											className="form-control rounded-0"
											name="name"
											onChange={handleInput}
											value={values.name}
											autoComplete="username"
										></input>
										{errors.name && <span className="text-danger">{errors.name}</span>}
									</div>

									<div className="mb-3">
										<label htmlFor="email">
											<strong>Email</strong>
										</label>
										<input
											type=""
											placeholder="Email"
											className="form-control rounded-0"
											name="email"
											onChange={handleInput}
											value={values.email}
											autoComplete="email"
										></input>
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
											autoComplete="current-password"
										></input>
										{errors.password && <span className="text-danger">{errors.password}</span>}
									</div>

									<button className="btn btn-success border w-100 rounded-0">
										<strong>Nastavit</strong>
									</button>
								</form>
							</div>
						</div>
						<div className="d-flex justify-content-center align-items-center mt-5">
							<div className="bg-white p-3 rounded w-50">
								<h2 className="text-center">Zmazanie uctu</h2>
								<form action="" onSubmit={handleDelete}>
									<button className="btn btn-danger border w-100 rounded-0">
										<strong>Zmazat</strong>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default Nastavenia;
