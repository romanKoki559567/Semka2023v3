import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";

const Login = () => {
	return (
		<div>
			<div className="homePage">
				<Nav />

				<div className="pravy-content">
					<Hlavicka />
                    <span> Login </span>
				</div>
			</div>
		</div>
	);
};
export default Login;
