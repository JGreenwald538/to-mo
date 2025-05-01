import { NextResponse } from "next/server";

// Store the affirmation and timestamp to reduce API calls
let cachedAffirmation: string | null = null;
let cacheTime: number | null = null;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
	try {
		// Return cached affirmation if still valid
		if (
			cachedAffirmation &&
			cacheTime &&
			Date.now() - cacheTime < CACHE_DURATION
		) {
			return NextResponse.json({ affirmation: cachedAffirmation });
		}

		const response = await fetch(
			"https://www.affirmations.dev/?ref=freepublicapis.com",
			{ headers: { "Content-Type": "application/json" } }
		);

		if (!response.ok) {
			// Return a default affirmation if API fails
			return NextResponse.json({
				affirmation:
					"Every day is a new beginning. Take a deep breath and start again.",
			});
		}

		const data = await response.json();

		// Update cache
		cachedAffirmation = data.affirmation;
		cacheTime = Date.now();

		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching affirmation:", error);
		return NextResponse.json(
			{ affirmation: "You are capable of amazing things." },
			{ status: 200 }
		);
	}
}
