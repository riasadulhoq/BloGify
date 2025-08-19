import blogs from "@/data/data.json";
import Article from "./Article";
import LoadMore from "./LoadMore";
import SortingOption from "./SortingOption";

export default function ArticlesFeed() {
  // console.log(blogs);
  return (
    <div className="lg:w-2/3 lg:pr-12">
      {/* <!-- Sorting Dropdown --> */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>

        <SortingOption />
      </div>
      {blogs.length <= 0 ? (
        <h2 className="text-xl font-semibold">There is not any Article</h2>
      ) : blogs.length > 10 ? (
        <>
          {blogs.slice(0, 10).map((blog, idx) => (
            <Article key={idx} blog={blog} />
          ))}
          <LoadMore blogs={blogs} />
        </>
      ) : (
        blogs.map((blog, idx) => <Article key={idx} blog={blog} />)
      )}
    </div>
  );
}
