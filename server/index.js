const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

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

	const sql = "SELECT * FROM users_log WHERE id = ?";

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
	const sql = "UPDATE users_log SET meno = ?, mail = ? WHERE id = ?";
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
	const sql = "DELETE FROM users_log WHERE id = ?";
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

const bcrypt = require("bcrypt");
const saltRounds = 10;

app.post(
	"/signup",
	[
		check("name").notEmpty().withMessage("Meno nemoze byt prazdne"),
		check("email").notEmpty().withMessage("Email nemoze byt prazdne"),
		check("password").notEmpty().withMessage("Heslo nemoze byt prazdne"),
		check("bDate").notEmpty().withMessage("Meno nemoze byt prazdne"),
	],
	async (req, res) => {
		const { name, email, password, bDate } = req.body;
		const passwordString = String(password);
		const hashedPassword = await bcrypt.hash(passwordString, saltRounds);

		const checkEmailQuery = "SELECT * FROM users_log WHERE mail = ?";
		db.query(checkEmailQuery, [email], (checkEmailErr, checkEmailResult) => {
			if (checkEmailErr) {
				return res.status(500).json({ error: "db chyba" });
			}

			if (checkEmailResult.length > 0) {
				return res.status(400).json({ error: "Email already exists" });
			}

			const sql = "INSERT INTO users_log(meno, mail, heslo, fotka, datum_narodenia, log) VALUES (?,?,?,?,?,?)";
			const values = [name, email, hashedPassword, "sada", bDate, new Date()];
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				res.status(400).json({ errors: errors.array() });
				return;
			}

			db.query(sql, values, (err, result) => {
				if (err) {
					return res.status(500).json({ error: "db chyba" });
				}

				res.status(200).send("Záznam úspešne vložený");
			});
		});
	}
);

app.post("/signin", async (req, res) => {
	const { email, password } = req.body;

	const sql = "SELECT * FROM users_log WHERE mail = ?";
	const values = [email];

	db.query(sql, values, async (err, result) => {
		if (err) {
			console.error("Database error:", err);
			res.status(500).send("Internal Server Error");
			return;
		}

		if (result.length === 0) {
			res.status(401).send("Invalid email or password");
			return;
		}

		const hashedPassword = result[0].heslo;

		const passwordMatch = await bcrypt.compare(password, hashedPassword);

		if (!passwordMatch) {
			res.status(401).send("Invalid email or password");
			return;
		}
		const token = jwt.sign({ userId: result[0].id }, "your_secret_key", { expiresIn: "1h" });

		res.status(200).json({ token });
	});
});

app.get("/graf-data", (req, res) => {
	db.query("SELECT skutocna, predikovana, id AS i FROM p_odchylky LIMIT 50", (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).json(result);
		}
	});
});

app.listen(8081, () => {
	console.log("Server počúva na porte 8081");
});
