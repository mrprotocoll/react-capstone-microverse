const { render } = require('@testing-library/react');
const { default: Hero } = require('components/Hero');
const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { default: store } = require('redux/store');

describe('StockItem Component', () => {
  test('component match the snapshot', () => {
    const data = [
      {
        symbol: 'KZMS.ME',
        name: 'The Open Joint Stock Company Krasnokamsk Metal Mesh Works',
        price: 226,
        exchange: 'MCX',
        exchangeShortName: 'MCX',
        type: 'stock',
      },
      {
        symbol: 'YAFFX',
        name: 'AMG Yacktman Focused Fund',
        price: 18.02,
        exchange: 'Nasdaq',
        exchangeShortName: 'NASDAQ',
        type: 'trust',
      },
      {
        symbol: 'YAFIX',
        name: 'AMG Funds - AMG Yacktman Focused Fund',
        price: 17.96,
        exchange: 'Nasdaq',
        exchangeShortName: 'NASDAQ',
        type: 'trust',
      },
      {
        symbol: 'ZDIVX',
        name: 'Zacks Dividend Fund Investor Class',
        price: 21.66,
        exchange: 'Nasdaq',
        exchangeShortName: 'NASDAQ',
        type: 'trust',
      },
    ];

    const stockItem = render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero data={data} />
        </BrowserRouter>
      </Provider>,
    );
    expect(stockItem).toMatchSnapshot();
  });
});
