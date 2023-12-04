import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import New from "../new/new";

const Nastavenia = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<New />
			</div>
		</div>
	);
};
export default Nastavenia;
