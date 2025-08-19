import slugConverter from "@/utils/slugConverter";

export default function getBlogsBySlug(docs, slug) {
  return docs.find((doc) => slugConverter(doc.title) === slug);
}
