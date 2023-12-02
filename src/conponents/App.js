import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../conponents/pages/home/home";
import Login from "../conponents/pages/login/login";

// tuto sa vkladajú iba stránky cez ktoré sa bude preklikávať

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
