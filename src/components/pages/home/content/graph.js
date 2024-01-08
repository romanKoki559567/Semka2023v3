import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Graph = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8081/graf-data")
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.error("Chyba pri načítaní dat z grafu: ", err);
			});
	}, []);

	return (
		<div className="obsahGrafu">
			<LineChart width={800} height={200} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<XAxis dataKey="index" />
				<Line type="monotone" dataKey="skutocna" stroke="#4169E1" activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="predikovana" stroke="#87CEEB" activeDot={{ r: 8 }} />
			</LineChart>
		</div>
	);
};

export default Graph;
