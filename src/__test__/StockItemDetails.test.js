const { render } = require('@testing-library/react');
const { default: StockItemDetails } = require('components/StockItemDetails');
const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { default: store } = require('redux/store');

describe('Stock item Details Component', () => {
  test('component match the snapshot', () => {
    const data = {
      name: 'Apple',
      symbol: 'APPL',
      price: '25',
    };
    const itemDetails = render(
      <Provider store={store}>
        <BrowserRouter>
          <StockItemDetails name={data.name} value={data.price} />
        </BrowserRouter>
      </Provider>,
    );
    expect(itemDetails).toMatchSnapshot();
  });
});
