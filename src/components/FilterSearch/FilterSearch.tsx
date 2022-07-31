import * as React from 'react';

interface FilterSearchProps {
  searchText: string;
  setSearchText: (newValue: string) => void;
}

const FilterSearch = ({
  searchText,
  setSearchText,
}: FilterSearchProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

  const resetSearch = () => setSearchText('');

  return (
    <div className="flex items-center">
      <label className="mr-2">Search:</label>
      <div className="relative">
        <input className="border h-seo p-2 rounded w-72" onChange={handleSearch} type="text" value={searchText} />
        <button aria-label="Clear search text" className="h-seo ml-negseo w-seo" onClick={resetSearch}>x</button>
      </div>
    </div>
  );
};

export default React.memo(FilterSearch);
