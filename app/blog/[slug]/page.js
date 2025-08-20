import RecommendedBlogs from "@/components/RecommendedBlogs";
import SingleArticle from "@/components/SingleArticle";
import blogs from "@/data/data.json";
import getBlogsBySlug from "@/utils/getBlogsBySlug";
import { notFound } from "next/navigation";

export default function BlogDetailsPage({ params }) {
  const { slug } = params;
  const blog = getBlogsBySlug(blogs, slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="lg:w-2/3 lg:pr-12">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <SingleArticle blog={blog} />
        <section className="bg-gray-50 py-12 mt-12">
          <RecommendedBlogs slugMatchedBlog={blog} />
        </section>
      </div>
    </div>
  );
}
