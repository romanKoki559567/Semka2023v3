import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Content from "./content";

const Zakl_pojmy = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<Content />
			</div>
		</div>
	);
};
export default Zakl_pojmy;