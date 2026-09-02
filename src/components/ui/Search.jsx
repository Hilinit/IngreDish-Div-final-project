const Search = ({ search, setSearch, style, placeholder }) => {
  return (
      <input type="search" value={search} placeholder={placeholder} onChange={(e) => setSearch(e.target.value)} className={`${style} bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 border-gray-200 dark:border-neutral-800 transition-colors`} />
  );
};

export default Search;