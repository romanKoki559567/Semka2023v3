import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Validation from "../signup/singupValidation";
import axios from "axios";

const Nastavenia = () => {
	const isAuthenticated = !!localStorage.getItem("token");
	const [values, setValues] = React.useState({
		name: "",
		email: "",
		heslo: "",
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
			const token = localStorage.getItem("token");

			await axios.post("http://localhost:8081/updateUser", values, {
				headers: {
					Authorization: `${token}`,
				},
			});
			window.alert("Uspesne zmenene");
		} catch (error) {
			console.error("CHyba pri vkladaní", error);
		}
	};


	const handleImageChange = (e) => {
		// Aktualizujte stav s novým súborom
		setValues({ ...values, image: e.target.files[0] });
	  };

	  const handleImageUpload = async () => {
		const formData = new FormData();
		formData.append('image', values.image);
	  
		try {
		  const token = localStorage.getItem("token");
		  await axios.post('http://localhost:8081/uploadImage', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data',
			  'Authorization': `${token}`,
			}
		  });
		  alert("Obrázok bol úspešne nahraný");
		} catch (error) {
		  alert("Chyba pri nahrávaní obrázka");
		  console.error("CHyba pri nahrávaní obrázka", error);
		}
	  };

	const handleDelete = async (event) => {
		event.preventDefault();

		try {
			const token = localStorage.getItem("token");

			await axios.post(
				"http://localhost:8081/deleteUser",
				{},
				{
					headers: {
						Authorization: `${token}`,
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

									<div className="mb-3">
										<label htmlFor="heslo">
											<strong>Heslo</strong>
										</label>
										<input
											type="password"
											placeholder="Heslo"
											className="form-control rounded-0"
											name="email"
											onChange={handleInput}
										></input>
									</div>

									<div className="mb-3">
										<label htmlFor="fotka">
											<strong>Profilová fotka</strong>
										</label>
										<input
											type="file"
											className="form-control"
											id="inputGroupFile04"
											aria-describedby="inputGroupFileAddon04"
											aria-label="Upload"
											onChange={handleImageChange}
										></input>
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
