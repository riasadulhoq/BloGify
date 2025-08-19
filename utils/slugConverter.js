export default function slugConverter(str) {
  const modifiedString = str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .slice(0, 60)
    .toLowerCase();
  const slug = modifiedString.replace(/ /g, "-");
  return slug;
}
