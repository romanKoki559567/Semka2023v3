import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Graph from "./content/graph";

const Home = () => {
	return (
		<div className="homePage">
			<Nav />
			<div className="pravy-content">
				<Hlavicka />
				<Graph />
			</div>
		</div>
	);
};
export default Home;
