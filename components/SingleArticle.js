import Image from "next/image";

export default function SingleArticle({ blog, searchParams }) {
  const { title, author, description, date, category } = blog;
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {title}
        </h1>

        <div className="flex items-center mb-6">
          <Image
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75"
            width={100}
            height={100}
            alt="Sumit Saha"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium mr-2">{author.name}</span>
              <button className="text-green-600 text-sm font-medium">
                Follow
              </button>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span>{date.slice(0, -6)}</span>
              <span className="mx-1">·</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
}
