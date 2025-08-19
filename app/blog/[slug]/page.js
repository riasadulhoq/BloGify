import RecommendedBlogs from "@/components/RecommendedBlogs";
import SingleArticle from "@/components/SingleArticle";
import blogs from "@/data/data.json";

export default function BlogDetailsPage({ params }) {
  const { slug } = params;

  return (
    <div class="lg:w-2/3 lg:pr-12">
      <div class="container mx-auto px-4 py-8 max-w-4xl">
        <SingleArticle slug={slug} />
        <section class="bg-gray-50 py-12 mt-12">
          {blogs.length > 4 && <RecommendedBlogs />}
        </section>
      </div>
    </div>
  );
}
