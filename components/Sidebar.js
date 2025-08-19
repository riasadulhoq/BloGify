import Footer from "./Footer";

export default function Sidebar() {
  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="#"
              className="bg-green-200 font-medium px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Programming
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Data Science
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Technology
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Self Improvement
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Writing
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Relationships
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Machine Learning
            </a>
            <a
              href="#"
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Productivity
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
