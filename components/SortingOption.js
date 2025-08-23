"use client";
import getCategories from "@/utils/getCategories";
import { useRouter } from "next/navigation";

export default function SortingOption({ searchParams }) {
  const router = useRouter();
  const queriedCategories = searchParams?.category;
  const categoriesList = getCategories(queriedCategories);

  const handleChange = (e) => {
    const url = new URLSearchParams();
    const selectedValue = e.target.value;

    if (!selectedValue) {
      url.delete("sort");
      categoriesList.forEach((cat) => url.append("category", cat));
    } else if (categoriesList.length > 0) {
      categoriesList.forEach((cat) => url.append("category", cat));
      url.append("sort", selectedValue);
    } else {
      url.set("sort", selectedValue);
    }

    router.push(`/?${url.toString()}`);
  };
  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
        onChange={(e) => handleChange(e)}
      >
        <option value="">Please Select</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Popular</option>
        <option value="read-time">Shortest Read Time</option>
      </select>
    </div>
  );
}
