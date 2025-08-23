import ArticlesFeed from "./ArticlesFeed";
import Sidebar from "./Sidebar";

export default function Landing({ searchParams }) {
  return (
    <>
      <ArticlesFeed searchParams={searchParams} />
      <Sidebar searchParams={searchParams} />
    </>
  );
}
