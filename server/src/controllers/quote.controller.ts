import { type Request, type Response } from "express";
import { Quote } from "../models/quotes.model.js";

export const quoteController = async (_req: Request, res: Response) => {
	try {
		const quotes = await Quote.find();
		res.status(200).json(quotes);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch quotes" });
	}
};
