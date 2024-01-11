import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSystem = () => {
	const [inputKomentar, setInputKomentar] = useState("");
	const [komentare, setKomentare] = useState([""]);
	const [userId, setUserId] = useState(null); // Add this line
	const [editingComment, setEditingComment] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		// Fetch user ID when the component mounts
		axios
			.get("http://localhost:8081/getUserID", {
				headers: {
					Authorization: `${token}`,
				},
			})
			.then((res) => {
				setUserId(res.data.userId);
			})
			.catch((err) => {
				console.error("Chyba pri načítaní userID", err);
			});

		// Fetch comments when the component mounts
		axios
			.get("http://localhost:8081/getKomentare")
			.then((res) => {
				setKomentare(res.data);
			})
			.catch((err) => {
				console.error("Chyba pri načítaní", err);
			});
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const token = localStorage.getItem("token");

			if (editingComment) {
				// Update existing comment
				await axios.put(
					`http://localhost:8081/editComment/${editingComment.id_comment}`,
					{ comment: inputKomentar },
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				);
			} else {
				// Add new comment
				await axios.post(
					"http://localhost:8081/postComment",
					{ comment: inputKomentar },
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				);
			}

			// Refresh comments
			const updatedComments = await axios.get("http://localhost:8081/getKomentare");
			setKomentare(updatedComments.data);

			// Reset form and editing state
			setInputKomentar("");
			setEditingComment(null);
		} catch (error) {
			console.error("Chyba pri vkladaní/editovaní komentára", error);
		}
	};

	const onCommDelete = async (id_comment) => {
		try {
			const token = localStorage.getItem("token");

			await axios.delete(`http://localhost:8081/deleteComm/${id_comment}`, {
				headers: {
					Authorization: `${token}`,
				},
			});

			// Refresh comments
			const updatedComments = await axios.get("http://localhost:8081/getKomentare");
			setKomentare(updatedComments.data);
		} catch (error) {
			console.error("Chyba pri mazaní komentára", error);
		}
	};

	const onCommEdit = (comment) => {
		setInputKomentar(comment.comment);
		setEditingComment(comment);
	};

	//console.log(userId);

	return (
		<div>
			<div>
				{komentare != null &&
					komentare.length > 0 &&
					komentare.map((komentar) => (
						<div className="card mt-2" key={komentar.id_comment}>
							<div className="card-body d-flex justify-content-between">
								<ul>{komentar.comment} </ul>
								<div className="d-md-flex justify-content-md-end flex-culum d-flex flex-column">
									<div className="d-flex gap-3 flex-nowrap">
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
										{userId === komentar.user_id && (
											// Only render the buttons if the logged-in user's ID matches the user_id of the comment
											<>
												<button type="button" className="btn btn-outline-primary" onClick={() => onCommEdit(komentar)}>
													Upraviť
												</button>
												<button type="button" className="btn btn-outline-danger" onClick={() => onCommDelete(komentar.id_comment)}>
													Vymazať
												</button>
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
			</div>

			<form onSubmit={handleSubmit}>
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					<h3>Komentár</h3>
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
					value={inputKomentar}
					onChange={(e) => setInputKomentar(e.target.value)}
					placeholder="Napíšte váš komentár..."
				/>
				<button className="btn btn-primary " type="submit">
					{editingComment ? "Upraviť komentár" : "Odoslať komentár"}
				</button>
			</form>
		</div>
	);
};

export default CommentSystem;
