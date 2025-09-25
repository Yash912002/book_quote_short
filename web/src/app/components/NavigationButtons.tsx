// "use client";

import Image from "next/image";
import { Button } from "./UI/Button";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
};

export default function NavigationButtons({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: Props) {
  return (
    <>
      {/* <button
        onClick={onPrev}
        disabled={disablePrev}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full disabled:opacity-40"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}

      <Button
        onClick={onPrev}
        disabled={disablePrev}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full disabled:opacity-40"

      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Button>

      <Button
        onClick={onNext}
        disabled={disableNext}
        className="hidden md:flex absolute right-10 top-1/2 -translate-x-1/2 bg-black/40 text-white p-3 rounded-full disabled:opacity-40"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </>
  );
}
