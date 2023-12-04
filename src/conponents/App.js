import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../conponents/pages/home/home";
import Login from "../conponents/pages/login/login";
import UserProfile from "../conponents/pages/userProfile/userProfile";
import OMne from "../conponents/pages/oMne/oMne";
import Projekty from "../conponents/pages/projekty/projekty";
import Technologie from "../conponents/pages/technologie/technologie";
import Nastavenia from "../conponents/pages/nastavenia/nastavenia";
import Signup from "../conponents/pages/signup/signup";

// tuto sa vkladajú iba stránky cez ktoré sa bude preklikávať

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/user-profile" element={<UserProfile />} />
				<Route path="/o-mne" element={<OMne />} />
				<Route path="/projekty" element={<Projekty />} />
				<Route path="/technologie" element={<Technologie />} />
				<Route path="/nastavenia-uctu" element={<Nastavenia />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
