import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSystem = () => {
	const [inputKomentar, setInputKomentar] = useState(""); // aktualne písany komentár (input)
	const [komentare, setKomentare] = useState([""]); // všetky moje komentáre (array)

	useEffect(() => { //  volá sa nonstop/klame
		axios
			.get("http://localhost:8081/getKomentare")
			.then((res) => {
				setKomentare(res.data);
			})
			.catch((err) => {
				console.error("Chyba pri načítaní dat z grafu: ", err);
			});
	}, []);

	const handleSubmit = async () => {
		try {
			await axios.post("http://localhost:8081/postComment", inputKomentar);
		} catch (error) {
			console.error("Chyba pri vkladaní", error.message);
		}
	};

	return (
		<div>
			<div>
				{komentare.length < 0 &&
					komentare.map(
						// ak komentare existujú tak ich namapuje ak je prázny tak nič
						(
							komentar // vypíše každy existujúci komentár a sprví z neho odstavec
						) => <li>{komentar}</li>
					)}
			</div>

			<form onSubmit={handleSubmit}>
				<textarea value={inputKomentar} onChange={(e) => setInputKomentar(e.target.value)} placeholder="Napíšte váš komentár..." rows="4" />
				<button type="submit">Odoslať komentár</button>
			</form>
		</div>
	);
};
export default CommentSystem;
