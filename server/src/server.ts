import cors from "cors";
import express from "express";

import { config } from "./config/config.js";
import { ConnectDb } from "./config/db.js";
import quoteRoutes from "./routes/quotes.route.js";


const app = express();

// Middlewares
app.use(express.json());
app.use(
	cors({
		origin: config.FRONTEND_URL,
		credentials: true,
	})
);

// Routes
app.use("/api/quotes", quoteRoutes);

app.get("/", (_req, res) => {
	res.send(`Application running on PORT ${config.PORT}`);
});

ConnectDb()
	.then(() => {
		app.listen(config.PORT, () => {
			console.log(`Server running on port ${config.PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to connect to DB:", err);
		process.exit(1);
	});
