import { useState } from "react";
import axios from "axios";
import Timeline from "../components/Timeline";
import Summary from "../components/Summary";

export default function Home() {
	const [username, setUsername] = useState("");
	const [repos, setRepos] = useState([]);
	const [error, setError] = useState("");
	const [summary, setSummary] = useState({});

	const handleGenerate = async () => {
		setError("");
		setRepos([]);
		setSummary({});
		if (!username) {
			setError("Please enter a GitHub username.");
			return;
		}
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=100`,
			);
			const sortedRepos = response.data.sort(
				(a, b) => new Date(a.created_at) - new Date(b.created_at),
			);
			setRepos(sortedRepos);

			// Bonus: Summary by year
			const summaryData = sortedRepos.reduce((acc, repo) => {
				const year = new Date(repo.created_at).getFullYear();
				acc[year] = (acc[year] || 0) + 1;
				return acc;
			}, {});
			setSummary(summaryData);
		} catch (err) {
			if (err.response && err.response.status === 404) {
				setError("GitHub user not found.");
			} else {
				setError("An error occurred while fetching repositories.");
			}
		}
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>GitHub Timeline</h1>
			<div style={styles.form}>
				<input
					type="text"
					placeholder="Enter GitHub username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					style={styles.input}
				/>
				<button type="button" onClick={handleGenerate} style={styles.button}>
					Generate
				</button>
			</div>
			{error && <p style={styles.error}>{error}</p>}
			{summary && Object.keys(summary).length > 0 && (
				<Summary summary={summary} />
			)}
			{repos.length > 0 && <Timeline repos={repos} />}
		</div>
	);
}

const styles = {
	container: {
		maxWidth: "800px",
		margin: "0 auto",
		padding: "2rem",
		fontFamily: "Arial, sans-serif",
	},
	title: {
		textAlign: "center",
		color: "#333",
	},
	form: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "1rem",
	},
	input: {
		padding: "0.5rem",
		fontSize: "1rem",
		width: "60%",
		marginRight: "0.5rem",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	button: {
		padding: "0.5rem 1rem",
		fontSize: "1rem",
		backgroundColor: "#0366d6",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
	error: {
		color: "red",
		textAlign: "center",
	},
};
