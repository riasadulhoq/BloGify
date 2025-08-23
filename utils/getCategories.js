export default function getCategories(queriedCategories) {
  let categoriesList;
  if (Array.isArray(queriedCategories)) {
    categoriesList = queriedCategories;
  } else if (!queriedCategories) {
    categoriesList = [];
  } else {
    categoriesList = [queriedCategories];
  }
  return categoriesList;
}
