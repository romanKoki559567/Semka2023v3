import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";

const UserProfile = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<span> UserProfile </span>
			</div>
		</div>
	);
};
export default UserProfile;
