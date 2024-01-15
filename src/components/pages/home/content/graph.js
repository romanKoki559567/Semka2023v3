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
				console.error("Error loading graph data: ", err);
			});
	}, []);

	return (
		<div className="obsahGrafu card-use">
			<div className="graph-container">
				<LineChart width={700} height={250} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="i" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="skutocna" stroke="#4169E1" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="predikovana" stroke="#87CEEB" activeDot={{ r: 8 }} />
				</LineChart>
			</div>
		</div>
	);
};

export default Graph;
