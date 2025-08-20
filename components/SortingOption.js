export default function SortingOption() {
  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="popular">Most Popular</option>
        <option value="read-time">Shortest Read Time</option>
      </select>
    </div>
  );
}
