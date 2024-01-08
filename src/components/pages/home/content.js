import React from "react";
import { Link } from "react-router-dom";
import Graph from "./content/graph";
import kokes from "../../../images/ja.png";

const Content = () => {
	return (
		<div className="main-content ">
			<div className="modely">
				<div className="item1">
					<h2 className="title">Vzduchotechnika</h2>
					<Graph />
				</div>

				
			</div>
			
		</div>
	);
};

export default Content;
