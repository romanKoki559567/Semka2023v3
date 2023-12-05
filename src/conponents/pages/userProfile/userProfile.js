import React, { useState } from "react";
import Nav from "../../utils/nav";
import Hlavicka from "../../utils/hlavicka";
import Log from "../../pages/login/login";

const UserProfile = () => {
	return (
		<div className="homePage">
			<Nav />

			<div className="pravy-content">
				<Hlavicka />
				<Log />
			</div>
		</div>
	);
};
export default UserProfile;
