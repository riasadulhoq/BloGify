"use client";

import { useState } from "react";
import Article from "./Article";

export default function LoadMore({ blogs }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <div className="text-center">
        <button
          className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
          onClick={handleClick}
        >
          {clicked ? "Hide" : "Load more"}
        </button>
      </div>
      {clicked &&
        blogs.slice(10).map((blog, idx) => <Article key={idx} blog={blog} />)}
    </>
  );
}
