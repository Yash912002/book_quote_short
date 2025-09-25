import "dotenv/config";

export const config = {
	PORT: process.env.PORT || 5000,
	MONGODB_URL: process.env.MONGODB_URL || "",
	FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
};
