import blogs from "@/data/data.json";
import Article from "./Article";

export default function RecommendedBlogs() {
  const blogsCopy = [...blogs];
  const shuffledBlogs = blogsCopy.sort(() => 0.5 - Math.random());
  console.log(shuffledBlogs);
  return (
    <div class="container mx-auto px-4 max-w-4xl">
      <h3 class="text-xl font-bold mb-6">Recommended Blogs</h3>

      <div class="grid grid-cols-2 gap-4">
        {shuffledBlogs.slice(0, 4).map((recBlog, idx) => (
          <Article key={idx} blog={recBlog} />
        ))}
      </div>
    </div>
  );
}
