"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <h2 className="text-xl font-bold mb-8">Something went wrong!</h2>
      <p className="text-lg font-semibold mb-8">Error: {error?.message}</p>
      <button
        className="bg-green-300 px-4 py-2 rounded-full text-md hover:bg-green-500 transition-colors"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
