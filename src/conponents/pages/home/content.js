import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";

const Content = () => {
	return (
		<div className="main-content">
			<div className="group-cont">
				<div className="modely">
					<div className="item1">
						<Card />
					</div>

					<div className="item2">
						<Card />
					</div>
				</div>

				<div className="item3">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Content;
