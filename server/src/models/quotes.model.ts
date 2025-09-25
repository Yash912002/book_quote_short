import mongoose from "mongoose";

export interface QuoteDocument extends Document {
	id: number;
  quote: string;
  author: string;
  book: string;
}

const quoteSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    book: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Quote = mongoose.model<QuoteDocument>("Quote", quoteSchema);
