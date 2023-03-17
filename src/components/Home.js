import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from 'redux/stock/stocksSlice';
import styles from 'styles/Home.module.css';
import Navbar from './Navbar';
import StockItem from './StockItem';

const Home = () => {
  const stocks = useSelector((store) => store.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      <div className={styles.items}>
        {
          stocks.map((item) => <StockItem key={item.symbol} name={item.name} price={item.price} />)
        }

      </div>
    </div>
  );
};

export default Home;
