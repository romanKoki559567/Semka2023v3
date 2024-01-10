import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSystem = () => {
	const [inputKomentar, setInputKomentar] = useState(""); // aktualne písany komentár (input)
	const [komentare, setKomentare] = useState([""]); // všetky moje komentáre (array)

	useEffect(() => {
		axios
			.get("http://localhost:8081/getKomentare")
			.then((res) => {
				setKomentare(res.data);
			})
			.catch((err) => {
				console.error("Chyba pri načítaní dat z grafu: ", err);
			});
	}, []);

	const handleSubmit = async (event) => {
		console.log("spuštam 'handleSubmit' comment", inputKomentar);
		event.preventDefault();

		try {
			const token = localStorage.getItem("token");

			await axios.post(
				"http://localhost:8081/postComment",
				{ comment: inputKomentar },
				{
					headers: {
						Authorization: `${token}`,
					},
				}
			);

			window.location.reload();
		} catch (error) {
			console.error("CHyba pri vkladaní", error);
		}
	};



	return (
		<div>
			<div>
				{komentare.length > 0 &&
					komentare.map((komentar) => (
						<div className="card mt-2 ">
							<div className="card-body">
								<ul key={komentar.id}>{komentar.comment}</ul>
								<div className="d-grid gap-2 d-md-flex justify-content-md-end">
									<button type="button" className="btn btn-outline-primary" onClick={() => Uprav(komentar.id)}>
										Upraviť
									</button>
									<button type="button" className="btn btn-outline-danger" onClick={() => Vymaz(komentar.id)}>
										Vymazať
									</button>
								</div>
							</div>
						</div>
					))}
			</div>

			<form onSubmit={handleSubmit}>
				<label for="exampleFormControlTextarea1" className="form-label">
					<h3>Komentár</h3>
				</label>
				<textarea
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
					value={inputKomentar}
					onChange={(e) => setInputKomentar(e.target.value)}
					placeholder="Napíšte váš komentár..."
				/>
				<button className="btn btn-primary "  type="submit">Odoslať komentár</button>
			</form>
		</div>
	);
};
export default CommentSystem;
