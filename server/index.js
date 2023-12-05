const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "log_vaii",
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
	const sql = "INSERT INTO logins(meno, mail, heslo, fotka, datum_narodenia, log) VALUES (?,?,?,?,?,?)";
	const values = [req.body.name, req.body.email, req.body.password, "sada", req.body.bDate, new Date()];

	

	db.query(sql, values, (err, result) => {
		if (err) {
			res.status(500).send(err.message);
			return;
		}
		res.status(200).send("Záznam úspešne vložený");
	});
});

app.listen(8081, () => {
	console.log("Server počúva na porte 8081");
});
