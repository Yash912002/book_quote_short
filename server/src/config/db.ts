import mongoose from "mongoose";
import { config } from "./config.js";

export const ConnectDb = async () => {
  try {
		const connection = await mongoose.connect(config.MONGODB_URL);
		console.info(
			"MongoDB is connected successfully",
			connection.connection.host
		);
	} catch (error) {
		console.error("MongoDB connection failed:", error);
		process.exit(1);
	}
};
