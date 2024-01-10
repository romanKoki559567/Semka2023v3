import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import CommentSystem from "./commentSystem";

const Technologie = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<CommentSystem />
			</div>
		</div>
	);
};
export default Technologie;
