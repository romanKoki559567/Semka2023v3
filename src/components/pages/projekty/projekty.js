import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Content from "./content";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Projekty = () => {
	const isAuthenticated = !!localStorage.getItem("token");
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
						<Content />
					</div>
				</div>
			)}
		</>
	);
};
export default Projekty;
