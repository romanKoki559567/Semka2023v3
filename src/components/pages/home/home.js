import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Graph from "./content/graph";
import Metriky from "./content/metriky";
import Info from "./content/info";
import Ciel from "./content/ciel";

const Home = () => {
	return (
		<div className="homePage">
			<Nav />
			<div className="pravy-content">
				<Hlavicka />
				<Graph />
				<Metriky />
				<Ciel />
				<Info />

			</div>
		</div>
	);
};
export default Home;
