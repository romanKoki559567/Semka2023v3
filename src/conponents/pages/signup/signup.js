import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Comp from "./comp";

const Signup = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />

				<Comp />
			</div>
		</div>
	);
};

export default Signup;
