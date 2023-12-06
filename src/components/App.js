import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../components/pages/home/home";
import Login from "../components/pages/login/login";
import UserProfile from "../components/pages/userProfile/userProfile";
import OMne from "../components/pages/oMne/oMne";
import Projekty from "../components/pages/projekty/projekty";
import Technologie from "../components/pages/technologie/technologie";
import Nastavenia from "../components/pages/nastavenia/nastavenia";
import Signup from "../components/pages/signup/signup";

// tuto sa vkladajú iba stránky cez ktoré sa bude preklikávať

function App() {
	const [success, setSuccess] = React.useState(false);

	React.useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setSuccess(true);
		}
	}, []);
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
