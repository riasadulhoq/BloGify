"use client";
import getCategories from "@/utils/getCategories";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "./Footer";

export default function Sidebar({ searchParams }) {
  const router = useRouter();
  const queriedCategories = searchParams?.category;
  const queriedSort = searchParams?.sort;

  const categoriesList = getCategories(queriedCategories);

  const [selectedCategories, setSelectedCategories] = useState(categoriesList);

  const handleClick = (cat) => {
    const url = new URLSearchParams();
    let newCategoriesList;
    if (selectedCategories.includes(cat)) {
      newCategoriesList = selectedCategories.filter(
        (selectedCat) => selectedCat != cat
      );

      setSelectedCategories(newCategoriesList);
    } else {
      newCategoriesList = [...selectedCategories, cat];
    }

    if (!queriedSort) {
      newCategoriesList.forEach((cat) => url.append("category", cat));
    } else if (queriedSort) {
      newCategoriesList.forEach((cat) => url.append("category", cat));
      url.append("sort", queriedSort);
    }

    setSelectedCategories(newCategoriesList);

    router.push(`/?${url.toString()}`);
  };

  // const blogsCopy = blogs;

  // const filtered = blogs.filter((blog) => {
  //   return selectedCategories.includes(blog.category.toLowerCase());
  // });

  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleClick("programming")}
              // href="/?category=programming"
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("programming")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Programming
            </button>
            <button
              // href="/?category=datascience"
              onClick={() => handleClick("data science")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("data science")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Data Science
            </button>
            <button
              // href="/?category=technology"
              onClick={() => handleClick("technology")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("technology")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Technology
            </button>
            <button
              // href="/?category=selfimprovement"
              onClick={() => handleClick("self improvement")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("self improvement")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Self Improvement
            </button>
            <button
              // href="/?category=writing"
              onClick={() => handleClick("writing")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("writing")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Writing
            </button>
            <button
              // href="/?category=relationships"
              onClick={() => handleClick("relationships")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("relationships")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Relationships
            </button>
            <button
              // href="/?category=machinelearning"
              onClick={() => handleClick("machine learning")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("machine learning")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Machine Learning
            </button>
            <button
              // href="/?category=productivity"
              onClick={() => handleClick("productivity")}
              className={` px-4 py-2 rounded-full text-sm transition-colors  ${
                selectedCategories.includes("productivity")
                  ? "bg-green-200"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Productivity
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
