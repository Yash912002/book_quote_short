"use client";

import { Quote } from "@/types/quote";
import { useState } from "react";
import QuoteCard from "./QuoteCard";
import NavigationButtons from "./NavigationButtons";
import { MobileClickZones } from "./MobileClickZones";

type props = {
  quotes: Quote[]
}

function QuoteNavigation({ quotes }: props) {
  const [current, setCurrent] = useState(0);

  const prevQuote = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const nextQuote = () => {
    if (current < quotes.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen p-4 relative overflow-hidden">
      {quotes.length > 0 && (
        <QuoteCard
          quote={quotes[current]?.quote}
          author={quotes[current]?.author}
          book={quotes[current]?.book}
        />
      )}

      <NavigationButtons
        onPrev={prevQuote}
        onNext={nextQuote}
        disablePrev={current === 0}
        disableNext={current === quotes.length - 1}
      />

      <MobileClickZones onPrev={prevQuote} onNext={nextQuote} />
    </div>
  )
}

export default QuoteNavigation;