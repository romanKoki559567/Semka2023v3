import React, { Component, useState } from "react";
import Graph from "../home/content/graph";
import Comm from "./commentSystem";

// TODO - pridať veci o projekte
const Content = () => {
	const [activeTab, setActiveTab] = useState(1);

	function renderContent() {
		switch (activeTab) {
			case 1:
				return (
					<div className="container">
						<Graph url={"graf-data-odch"} />
						graf 1
						<Comm />
					</div>
				);
			case 2:
				return (
					<div className="container">
						<Graph url={"graf-data-items"} />
						graf 2
						<Comm />
					</div>
				);
			case 3:
				return (
					<div className="container">
						<Graph url={"dfsdfds"} />
						graf 3
						<Comm />
					</div>
				);
			case 4:
				return <>4</>;
			default:
				return <>def</>;
		}
	}

	return (
		<div class="container">
			<ul className="nav nav-tabs tab-heder">
				<li onClick={() => setActiveTab(1)} className="nav-item">
					<a className={`nav-link ${activeTab === 1 && "active"}`} aria-current="#" href="#">
						Tab 1
					</a>
				</li>
				<li onClick={() => setActiveTab(2)} className="nav-item">
					<a className={`nav-link  ${activeTab === 2 && "active"}`} href="#">
						Tab 2
					</a>
				</li>
				<li onClick={() => setActiveTab(3)} className="nav-item">
					<a className={`nav-link ${activeTab === 3 && "active"}`} href="#">
						Tab 3
					</a>
				</li>
				<li onClick={() => setActiveTab(4)} className="nav-item">
					<a className={`nav-link  ${activeTab === 4 && "active"}`} href="#" tabIndex="-1" aria-disabled="true">
						Tab 4
					</a>
				</li>
			</ul>

			{renderContent()}
		</div>
	);
};

export default Content;
