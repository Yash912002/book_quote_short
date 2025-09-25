import { Router } from "express";
import { quoteController } from "../controllers/quote.controller.js";

const quoteRouter = Router();

quoteRouter.get("/", quoteController);

export default quoteRouter;