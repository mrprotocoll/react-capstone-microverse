import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks, reverseStocks } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Search from './Search';
import StockItem from './StockItem';

let render = true;
const Home = () => {
  const { stocks, hero } = useSelector((store) => store.stock);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!showSearch) dispatch(reverseStocks());
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar handleClick={handleSearch} showSearch />
      { showSearch && <Search /> }
      <Hero data={hero} />
      {
          stocks.length > 0
            ? (
              <ul className={styles.items}>
                {
          stocks.map((stock) => <StockItem key={stock.symbol} data={stock} />)
        }
              </ul>
            )
            : showSearch ? <h2 className="notfound">No Record Found</h2> : <h2 className="notfound">Please Wait...</h2>
      }
    </div>
  );
};

export default Home;
