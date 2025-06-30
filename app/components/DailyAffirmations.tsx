"use client";

import { useState, useEffect } from "react";

export default function DailyAffirmations() {
	const [affirmation, setAffirmation] = useState(
		"Today is going to be a great day!"
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		// Only fetch once when the component mounts
		const fetchAffirmation = async () => {
			if (loading) return; // Prevent duplicate fetches

			setLoading(true);
			try {
				// Use a CORS proxy or consider a different API that supports CORS
				const response = await fetch("/api/affirmation"); // Create this API route in Next.js

				if (!response.ok) throw new Error("Failed to fetch");

				const data = await response.json();
				setAffirmation(data.affirmation);
			} catch (err) {
				console.error("Error fetching affirmation:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchAffirmation();
	}, []); // Empty dependency array means it only runs once

	return (
		<div className="px-4 rounded-3xl bg-white shadow-md text-center border-4 text-white text-2xl" style={{
            borderColor: "var(--color-secondary)",
            backgroundColor: "var(--color-primary)"
        }}>
			{error ? (
				<p className="">
					Believe in yourself and all that you are. Know that there is something
					inside you that is greater than any obstacle.
				</p>
			) : loading ? (
				<p>Loading your daily inspiration...</p>
			) : (
				<p className="">{affirmation}</p>
			)}
		</div>
	);
}
