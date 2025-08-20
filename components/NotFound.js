import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-8">The blog does not exist</h2>

      <Link
        href="/"
        className="bg-green-300 px-4 py-2 rounded-full text-md hover:bg-green-500 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
