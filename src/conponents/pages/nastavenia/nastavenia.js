import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";

const Nastavenia = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<span> Nastavenia </span>
			</div>
		</div>
	);
};
export default Nastavenia;
