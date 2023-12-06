import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import kokes from "../../../images/ja.png";

const OMne = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<div className="main-content ">
					<div className="modely">
						<div className="modely ">
							<div className="item3 ">
								<h2 className="title">Roman Kokes</h2>
								<img className="profile-photo" src={kokes} alt="phone" />
							</div>

							<div className="item4">
								<div className="about-me">
									<h2 className="title">O Mne</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur. Velit montes vestibulum in aliquet vehicula. Suscipit cras a adipiscing augue
										fringilla. In eu consectetur et et morbi venenatis amet elementum malesuada. Amet et pretium quisque maecenas neque
										proin lectus nulla. Elit egestas non odio lorem nec quis urna purus. Faucibus sed urna massa morbi auctor dictum ac
										suscipit at. Tellus gravida potenti id vel vel fusce mattis.
									</p>
								</div>
								<div className="vertical-line"></div>
								<div className="skills">
									<h2 className="title">Skills</h2>
									<div className="metrika">
										<p>C++</p>
										<p>Zaciatocnik</p>
									</div>
									<div className="metrika">
										<p>Java</p>
										<p>Zaciatocnik</p>
									</div>
									<div className="metrika">
										<p>SQL</p>
										<p>Zaciatocnik</p>
									</div>
									<div className="metrika">
										<p>R</p>
										<p>Zaciatocnik</p>
									</div>
									<div className="metrika">
										<p>AnyLogic</p>
										<p>Zaciatocnik</p>
									</div>
									<div className="metrika">
										<p>Optimalizácia</p>
										<p>Zaciatocnik</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default OMne;
