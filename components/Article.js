import slugConverter from "@/utils/slugConverter";
import Image from "next/image";
import Link from "next/link";
import BookmarkIcon from "./BookmarkIcon";

export default function Article({ blog }) {
  const { title, author, description, date, category } = blog;

  const slug = slugConverter(title);

  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <Image
          src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75"
          alt="Author"
          width={100}
          height={100}
          className="h-6 w-6 rounded-full mr-2"
        />
        <span className="text-sm font-medium">{author.name}</span>
      </div>

      <Link
        href={`/blog/${slug}`}
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {title}
      </Link>

      <p className="text-gray-700 mb-4">
        Discover the latest features and improvements in Tailwind CSS v4 and how
        they can enhance your web development workflow.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{date.slice(0, -6)}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{category}</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <BookmarkIcon />
      </button>
    </article>
  );
}
