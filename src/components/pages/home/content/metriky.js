import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Comp from "./compLog";

const Metriky = () => {
	return (
		<div>
			<div className="item2">
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
			;
		</div>
	);
};

export default Metriky;
