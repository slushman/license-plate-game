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
    <div className="flex items-center mb-6 rounded bg-lightblue border-2 border-solid w-full max-w-[366px] text-darkblue">
      <label className="p-2">Search:</label>
      <input className="h-seo p-2 w-[68%]" onChange={handleSearch} type="text" value={searchText} />
      <button aria-label="Clear search text" className="h-seo pb-2 text-2xl w-seo" onClick={resetSearch}>𐄂</button>
    </div>
  );
};

export default React.memo(FilterSearch);
