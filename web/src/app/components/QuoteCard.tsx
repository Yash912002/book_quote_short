import { Quote } from "@/types/quote";

export default function QuoteCard({ quote, author, book }: Quote) {
  return (
    <div className="flex flex-col justify-between w-full max-w-4xl h-[70vh] bg-purple-400 rounded-xl shadow-lg p-6 md:p-10">

      {/* Book name */}
      <div className="text-sm md:text-lg font-medium self-end italic text-gray-200">
        {book}
      </div>

      {/* Quote text */}
      <div className="flex-1 flex items-center justify-center text-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-purple-950">
          {quote}
        </h1>
      </div>

      {/* Author */}
      <div className="text-center text-base sm:text-lg font-semibold text-gray-200">
        — {author}
      </div>
    </div>
  )
}
