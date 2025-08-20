import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-8">404 - Page Not Found</h2>
      <p className="text-lg font-semibold mb-8">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-green-300 px-4 py-2 rounded-full text-md hover:bg-green-500 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
