import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Content from "./content";
import Comm from "./commentSystem";

const Projekty = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<Content />
				<Comm />
			</div>
		</div>
	);
};
export default Projekty;
