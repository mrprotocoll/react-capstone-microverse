import { useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="search">
      <input type="text" placeholder="Search stocks" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </div>

  );
};

export default Search;
