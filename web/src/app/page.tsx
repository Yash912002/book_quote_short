import { getQuotes } from "@/lib/api";
import QuoteNavigation from "./components/QuoteNavigation";

export default async function Home() {
  const quotes = await getQuotes();
  
  return (
    <QuoteNavigation quotes={quotes} />
  )
}
