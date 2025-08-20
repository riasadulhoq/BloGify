import blogs from "@/data/data.json";
import Article from "./Article";

export default function RecommendedBlogs({ slugMatchedBlog }) {
  // console.log(typeof slugMatchedBlog.title);
  const blogsWithoutMatchedBlog = blogs.filter(
    (blog) => blog.title != slugMatchedBlog.title
  );
  // console.log(blogsWithoutMatchedBlog);
  const shuffledBlogs = blogsWithoutMatchedBlog.sort(() => 0.5 - Math.random());
  //   console.log(shuffledBlogs);
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>

      <div className="grid grid-cols-2 gap-4">
        {shuffledBlogs.slice(0, 4).map((recBlog, idx) => (
          <Article key={idx} blog={recBlog} />
        ))}
      </div>
    </div>
  );
}
