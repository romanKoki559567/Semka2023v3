import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Info from "./info";
import Location from "./location";

const oMne = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<Info />
				<Location />
			</div>
		</div>
	);
};
export default oMne;
