import React, { useState } from "react";
import Graph from "../home/content/graph";
import Comm from "./commentSystem";

const Content = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabChange = (tabNumber) => {
		setActiveTab(tabNumber);
	};

	const renderContent = () => {
		switch (activeTab) {
			case 1:
				return (
					<div className="container">
						<Graph url={"graf-data-odch"} />
						<div className="card-use-projects mt-4">
							<h2 className="pod-nadpis">1# MOMENTÁLNE NEDOSTUPNÉ</h2>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="container">
						<Graph url={"graf-data-items"} />
						<div className="card-use-projects mt-4">
							<h2 className="pod-nadpis">2# MOMENTÁLNE NEDOSTUPNÉ </h2>
						</div>
					</div>
				);
			case 3:
				return (
					<div className="container">
						<Graph url={"graf-data-odch"} />
						<div className="card-use-projects mt-4">
							<h2 className="pod-nadpis">3# MOMENTÁLNE NEDOSTUPNÉ</h2>
						</div>
					</div>
				);
			default:
				return <>def</>;
		}
	};

	return (
		<div className="container">
			<ul className="nav nav-tabs tab-heder">
				<li onClick={() => handleTabChange(1)} className="nav-item">
					<div className={`nav-link ${activeTab === 1 && "active"}`}>Projekt 1</div>
				</li>
				<li onClick={() => handleTabChange(2)} className="nav-item">
					<div className={`nav-link  ${activeTab === 2 && "active"}`}>Projekt 2</div>
				</li>
				<li onClick={() => handleTabChange(3)} className="nav-item">
					<div className={`nav-link ${activeTab === 3 && "active"}`}>Projekt 3</div>
				</li>
			</ul>

			{renderContent()}

			<Comm projectID={activeTab} handleTabChange={handleTabChange} />
		</div>
	);
};

export default Content;
