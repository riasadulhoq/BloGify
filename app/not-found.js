import GlobalNotFound from "@/components/GlobalNotFound";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};
export default function NotFoundPage() {
  return (
    <div className="lg:w-2/3 lg:pr-12">
      <GlobalNotFound />
    </div>
  );
}
