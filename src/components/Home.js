import styles from 'styles/Home.module.css';
import Navbar from './Navbar';
import StockItem from './StockItem';

const Home = () => (
  <div className="container">
    <Navbar />
    <div className={styles.items}>
      <StockItem name="Apple" price="32,000" />
      <StockItem name="Apple" price="32,000" />
      <StockItem name="Apple" price="32,000" />
    </div>
  </div>
);

export default Home;