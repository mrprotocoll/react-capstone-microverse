import { useSelector } from 'react-redux';
import styles from 'styles/Home.module.css';
import Navbar from './Navbar';
import StockItemDetails from './StockItemDetails';

const Details = () => {
  const { details } = useSelector((store) => store.details);

  return (
    <div className="container">
      <Navbar />
      <ul className={styles.details}>
        <StockItemDetails key={details.symbol} name="Name" value={details.name} />
      </ul>
    </div>
  );
};

export default Details;
