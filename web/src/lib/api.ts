import { Quote } from "@/types/quote";

const API_BASE_URL = process.env.API_URL;

export async function getQuotes(): Promise<Quote[]> {
	const response = await fetch(`${API_BASE_URL}/quotes`, {
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed to fetch the quotes");
	}

	return response.json();
}
