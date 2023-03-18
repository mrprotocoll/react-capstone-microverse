import styles from 'styles/Navbar.module.css';
import { FaArrowLeft, FaCog, FaSistrix } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Navbar = ({ handleClick, showSearch }) => (
  <nav className="container">
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.back}><FaArrowLeft /></NavLink>
      <h1>Stock Price</h1>
      <div className={styles.user}>
        {
          showSearch && (
          <div>
            <FaSistrix onClick={handleClick} />
          </div>
          )
        }

        <FaCog />
      </div>
    </div>
  </nav>
);

Navbar.defaultProps = {
  handleClick: () => null,
  showSearch: false,
};

Navbar.propTypes = {
  handleClick: PropTypes.func,
  showSearch: PropTypes.bool,
};

export default Navbar;
