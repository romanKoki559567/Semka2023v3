import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";

const OMne = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<span> OMne </span>
			</div>
		</div>
	);
};
export default OMne;
