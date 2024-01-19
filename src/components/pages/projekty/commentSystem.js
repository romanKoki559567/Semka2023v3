import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSystem = ({ projectID, handleTabChange }) => {
	const [inputKomentar, setInputKomentar] = useState("");
	const [komentare, setKomentare] = useState([""]);
	const [userId, setUserId] = useState(null);
	const [editingComment, setEditingComment] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("token");

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

		axios
			.get("http://localhost:8081/getKomentare", {
				params: { projectID: projectID },
			})
			.then((res) => {
				setKomentare(res.data);
			})
			.catch((err) => {
				setKomentare(null);
				console.error("Chyba pri načítaní", err);
			});
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const token = localStorage.getItem("token");

			if (editingComment) {
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
				await axios.post(
					"http://localhost:8081/postComment",
					{
						comment: inputKomentar,
						projectID: projectID,
					},
					{
						headers: {
							Authorization: `${token}`,
						},
					}
				);
			}

			setInputKomentar("");

			const updatedComments = await axios.get("http://localhost:8081/getKomentare", {
				params: {
					projectID: projectID,
				},
			});
			setKomentare(updatedComments.data);

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

			const updatedComments = await axios.get("http://localhost:8081/getKomentare", {
				params: {
					projectID: projectID,
				},
			});
			setKomentare(updatedComments.data);
		} catch (error) {
			console.error("Chyba pri mazaní komentára", error);
		}
	};

	const onCommEdit = (comment) => {
		setInputKomentar(comment.comment);
		setEditingComment(comment);
	};

	return (
		<div className="container mb-5">
			<div>
				{komentare != null &&
					komentare.length > 0 &&
					komentare.map((komentar) => (
						<div className="card mt-2" key={komentar.id_comment}>
							<div className="card-body d-flex justify-content-between flex-wrap">
								<div className="comm-form" style={{ maxHeight: "100px", overflowY: "auto" }}>
									{komentar.comment}
								</div>
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
			<form className=" mt-4" onSubmit={handleSubmit}>
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
					maxLength={150}
				/>

				<button className="btn btn-primary mt-3" type="submit">
					{editingComment ? "Upraviť komentár" : "Odoslať komentár"}
				</button>
				<small className="text-muted character-count">{inputKomentar.length}/150 znakov</small>
			</form>
		</div>
	);
};

export default CommentSystem;
