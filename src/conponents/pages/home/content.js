import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import { ReactComponent as Graf } from "../../../images/graf1.svg";
import kokes from "../../../images/ja.png";

const Content = () => {
	return (
		<div className="main-content ">
			<div className="item1 row">
				<h2 className="title">Vzduchotechnika</h2>
				<Graf />
			</div>

			<div className="item2 row">
				<h2 className="title">Metriky</h2>
				<div className="metrika">
					<p>SSE</p>
					<p>0,3%</p>
				</div>
				<div className="line"></div>
				<div className="metrika">
					<p>MSE</p>
					<p>0,3%</p>
				</div>
				<div className="line"></div>
				<div className="metrika">
					<p>RMSE</p>
					<p>0,3%</p>
				</div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default Content;
