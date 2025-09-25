import { Quote } from "@/types/quote";

export async function getQuotes(): Promise<Quote[]> {
	const response = await fetch("http://localhost:5000/api/quotes", {
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed to fetch the quotes");
	}

	return response.json();
}
