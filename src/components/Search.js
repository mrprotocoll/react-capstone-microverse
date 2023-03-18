import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { filterStocks, reverseStocks } from 'redux/stock/stocksSlice';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);

    if (searchValue.trim()) {
      dispatch(filterStocks(searchValue));
    } else {
      dispatch(reverseStocks());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      dispatch(filterStocks(searchValue));
    } else {
      dispatch(reverseStocks());
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search stocks" value={searchValue} onChange={handleInputChange} />
      <button type="submit" aria-label="Search" className="btn">
        <FaSistrix />
      </button>
    </form>
  );
};

export default Search;
