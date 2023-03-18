import { NavLink } from 'react-router-dom';
import styles from 'styles/Navbar.module.css';
import { FaArrowLeft, FaCog } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <div className={`container ${styles.navbar}`}>
      <NavLink to="/" className={styles.back}><FaArrowLeft /></NavLink>
      <h1>Stock Price</h1>
      <div className={styles.user}>
        <FaCog />
      </div>
    </div>
  </nav>
);
export default Navbar;
