import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Search from './Search';
import StockItem from './StockItem';

const Home = () => {
  const { stocks, hero } = useSelector((store) => store.stock);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar handleClick={() => setShowSearch(!showSearch)} showSearch />
      { showSearch && <Search /> }
      <Hero data={hero} />
      <ul className={styles.items}>
        {
          stocks.map((stock) => <StockItem key={stock.symbol} data={stock} />)
        }
      </ul>
    </div>
  );
};

export default Home;
