import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import person from "../../../images/log-person.png";
import password from "../../../images/log-password.png";
import email from "../../../images/log-email.png";

const Login = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />

				<div className="container-log">
					<div className="header-log">
						<div className="text">Sign up</div>
						<div className="underline"></div>
					</div>

					<div className="inputs">
						<div className="input">
							<img src={person} alt="" />
							<input type="text" placeholder="Name" />
						</div>
					</div>

					<div className="inputs">
						<div className="input">
							<img src={email} alt="" />
							<input type="email" placeholder="Email Id" />
						</div>
					</div>

					<div className="inputs">
						<div className="input">
							<img src={password} alt="" />
							<input type="password" placeholder="Password" />
						</div>
					</div>
					<div className="forgot-password">
						Lost Password? <span>Click Here!</span>
					</div>
					<div className="submit-container">
						<div className="submit">Sign Up</div>
						<div className="submit">Login</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
