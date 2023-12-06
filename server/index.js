const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "log_vaii",
});

const users = {
	user123: {
		id: "user123",
		name: "John Doe",
		email: "john.doe@example.com",
	},
};

app.use(bodyParser.urlencoded({ extended: true }));

const secretKey = "your_secret_key";

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	const token = authHeader.substring(7); // Remove "Bearer " from the header

	try {
		const decoded = jwt.verify(token, secretKey);
		req.userId = decoded.userId;
		next();
	} catch (error) {
		return res.status(401).json({ error: "Invalid token" });
	}
};

app.get("/getUserData", verifyToken, async (req, res) => {
	const userId = req.userId;

	const sql = "SELECT * FROM logins WHERE id = ?";

	db.query(sql, [userId], (err, result) => {
		if (err) {
			console.error("Error fetching user data:", err);
			res.status(500).json({ error: "Internal Server Error" });
			return;
		}

		if (result.length === 0) {
			res.status(401).json({ error: "Unauthorized" });
			return;
		}

		const user = result[0];
		res.json({
			name: user.meno,
			email: user.mail,
		});
	});
});

app.post("/updateUser", verifyToken, async (req, res) => {
	const userId = req.userId;
	const sql = "UPDATE logins SET meno = ?, mail = ? WHERE id = ?";
	const values = [req.body.name, req.body.email, userId];

	db.query(sql, values, (err, result) => {
		if (err) {
			console.error("Error updating user:", err);
			res.status(500).send(err.message);
			return;
		}
		res.status(200).send("Záznam úspešne aktualizovaný");
	});
});

app.post("/deleteUser", verifyToken, async (req, res) => {
	const userId = req.userId;
	const sql = "DELETE FROM logins WHERE id = ?";
	const values = [userId];

	db.query(sql, values, (err, result) => {
		if (err) {
			console.error("Error deleting user:", err);
			res.status(500).send(err.message);
			return;
		}
		res.status(200).send("Záznam úspešne odstránený");
	});
});

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

app.post("/signin", (req, res) => {
	const sql = "SELECT * FROM logins WHERE mail = ? AND heslo = ?";
	const values = [req.body.email, req.body.password];

	db.query(sql, values, (err, result) => {
		if (err) {
			console.error("Database error:", err);
			res.status(500).send("Internal Server Error");
			return;
		}

		if (result.length === 0) {
			res.status(401).send("Invalid email or password");
			return;
		}

		const token = jwt.sign({ userId: result[0].id }, "your_secret_key", { expiresIn: "1h" });

		res.status(200).json({ token });
	});
});

app.listen(8081, () => {
	console.log("Server počúva na porte 8081");
});
