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
				<div className="homePage-main">
					<div className="row ">
						<div className="col-sm">
							<Graph />
						</div>
						<div className="col-sm">
							<Metriky />
						</div>
					</div>

					<div className="row">
						<div className="col-sm">
							<Ciel />
						</div>
						<div className="col-sm">
							<Info />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
