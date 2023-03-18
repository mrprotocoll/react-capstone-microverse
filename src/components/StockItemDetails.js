import { PropTypes } from 'prop-types';

const StockItemDetails = ({ name, value }) => (
  <li>
    <h2>{name}</h2>
    <h3>{value}</h3>
  </li>
);

StockItemDetails.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StockItemDetails;
