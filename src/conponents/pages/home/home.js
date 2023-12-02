import React, { useState } from "react";
import Footer from "./footer";
import ServiceCard from "./contentHome";
import Nav from "./nav";

const Home = () => {
	return (
		<div>
			<Nav />

			<h1>Home1</h1>
			<ServiceCard
				link="/login"
				imageSrc=""
				imageAlt="Vŕtanie studne"
				heading="Vŕtanie studní"
				description="Firma sa zameriava na vrty pre tepelné čerpadlá, geologické prieskumné, odvodňovacie a stavebné vrty. "
			/>
			<Footer />
		</div>
	);
};
export default Home;
