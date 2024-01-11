import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSystem = () => {
	// stavy komponentu
	const [inputKomentar, setInputKomentar] = useState(""); // aktualne písany komentár (input)
	const [komentare, setKomentare] = useState([""]); // všetky moje komentáre (array)

	// instantné načítanie pred zobrazením kompontntu
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

			await axios
				.post(
					"http://localhost:8081/postComment",
					{ comment: inputKomentar },
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				)
				.then(() => {
					axios
						.get("http://localhost:8081/getKomentare")
						.then((res) => {
							setKomentare(res.data);
						})
						.catch((err) => {
							console.error("Chyba pri načítaní dat z grafu: ", err);
						});
				});
		} catch (error) {
			console.error("CHyba pri vkladaní", error);
		}
	};

	// + url -> /${id_comment}
	const onCommDelete = async (id_comment) => {
		console.log("spuštam 'onCommDelete' comment", id_comment);

		try {
			const token = localStorage.getItem("token");

			await axios
				.delete(`http://localhost:8081/deleteComm/${id_comment}`, {
					headers: {
						Authorization: `${token}`,
					},
				})
				.then(() => {
					axios
						.get("http://localhost:8081/getKomentare")
						.then((res) => {
							setKomentare(res.data);
						})
						.catch((err) => {
							console.error("Chyba pri načítaní dat z grafu: ", err);
						});
				});
		} catch (error) {
			console.error("chyba pri mazaní", error);
		}
	};
	// TODO - upraviť settings comm
	return (
		<div>
			<div>
				{komentare != null &&
					komentare.length > 0 &&
					komentare.map((komentar) => (
						<div className="card mt-2 ">
							<div className="card-body d-flex justify-content-between">
								<ul>{komentar.comment} </ul>
								<div className=" d-md-flex justify-content-md-end flex-culum d-flex flex-column">
									<div className="d-flex gap-3 flex-nowrap">
										<p>(edit)</p>
										<p> {komentar.meno}</p>
										<time dateTime={komentar.date}>
											{new Date(komentar.date).toLocaleDateString("sk-SK", {
												year: "numeric",
												month: "long",
												day: "numeric",
												hour: "2-digit",
												minute: "2-digit",
												second: "2-digit",
											})}
										</time>
									</div>

									<div>
										<button type="button" className="btn btn-outline-primary">
											Upraviť
										</button>
										<button type="button" className="btn btn-outline-danger" onClick={() => onCommDelete(komentar.id_comment)}>
											Vymazať
										</button>
									</div>
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
				<button className="btn btn-primary " type="submit">
					Odoslať komentár
				</button>
			</form>
		</div>
	);
};
export default CommentSystem;
