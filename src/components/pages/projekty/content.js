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
							<h2 className="pod-nadpis2">Binomické rozdelenie pravdepodobností</h2>
							<p>
								Popis a využitie: Binomické rozdelenie sa využíva na modelovanie počtu úspechov v pevnom počte nezávislých pokusov, kde
								každý pokus má len dva možné výsledky (často označované ako úspech a neúspech). Toto rozdelenie bolo vymyslené na štúdium
								pravdepodobnostných procesov, kde je zaujímavé vedieť, ako často sa môže vyskytnúť určitý počet úspechov pri opakovaných
								pokusoch, ako napríklad pri hodoch mincou alebo v medicínskych testoch.
							</p>
							<p>Rozsah: Binomické rozdelenie je definované pre diskrétne hodnoty. Jeho rozsah je od 0 do nn, kde nn je počet pokusov.</p>
							<p>Pravdepodobnostná Funkcia:</p>
						</div>
					</div>
				);
			case 2:
				return (
					<div className="container">
						<Graph url={"graf-data-items"} />
						<div className="card-use-projects mt-4">
							<h2 className="pod-nadpis">Diskrétne rozdelenia</h2>
							<ul>
								<li className="odsad">
									<strong>Binomické rozdelenie</strong> (binomial distribution)
								</li>
								<li className="odsad">
									<strong>Poissonovo rozdelenie</strong> (Poisson distribution)
								</li>
							</ul>
						</div>
					</div>
				);
			case 3:
				return (
					<div className="container">
						<Graph url={"graf-data-odch"} />
						<div className="card-use-projects mt-4">
							<h2 className="pod-nadpis">Spojité rozdelenia</h2>
							<ul>
								<li className="odsad">
									<strong>Normálne rozdelenie</strong> (normal distribution)
								</li>
								<li className="odsad">
									<strong>Exponenciálne rozdelenie</strong> (exponential distribution)
								</li>
							</ul>
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
