import { Quote } from "./models/quotes.model.js";
import { ConnectDb } from "./config/db.js";
import { quotes } from "./data/quotes.data.js";

const seedQuotes = async () => {
	try {
		await ConnectDb();
		await Quote.deleteMany();
		await Quote.insertMany(quotes);
		console.log("Quotes seeded!");
	} catch (error) {
		console.error("Quotes seeding failed", error);
	} finally {
		process.exit();
	}
};

seedQuotes();
