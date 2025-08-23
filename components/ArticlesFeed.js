import blogs from "@/data/data.json";
import getCategories from "@/utils/getCategories";
import { Suspense } from "react";
import Article from "./Article";
import Loading from "./Loading";
import LoadMore from "./LoadMore";
import SortingOption from "./SortingOption";

export default function ArticlesFeed({ searchParams }) {
  const queriedCategories = searchParams?.category;
  const queriedSort = searchParams?.sort;

  const categoriesList = getCategories(queriedCategories);
  // console.log(typeof queriedSort);

  let filteredBlogs = blogs;

  if (filteredBlogs && categoriesList.length > 0) {
    filteredBlogs = filteredBlogs.filter((blog) =>
      categoriesList.includes(blog.category.toLowerCase())
    );
  }
  if (queriedSort === "latest") {
    filteredBlogs = filteredBlogs
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (queriedSort === "oldest") {
    filteredBlogs = filteredBlogs
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <div className="lg:w-2/3 lg:pr-12">
      {/* <!-- Sorting Dropdown --> */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>

        <SortingOption searchParams={searchParams} />
      </div>
      {filteredBlogs.length <= 0 ? (
        <h2 className="text-xl font-semibold">No Article To Display</h2>
      ) : filteredBlogs.length > 10 ? (
        <>
          {filteredBlogs.slice(0, 10).map((blog, idx) => (
            <Article key={idx} blog={blog} />
          ))}
          <Suspense fallback={<Loading />}>
            <LoadMore blogs={filteredBlogs} />
          </Suspense>
        </>
      ) : (
        filteredBlogs.map((blog, idx) => <Article key={idx} blog={blog} />)
      )}
    </div>
  );
}
