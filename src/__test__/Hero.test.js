const { render } = require('@testing-library/react');
const { default: Hero } = require('components/Hero');
const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { default: store } = require('redux/store');

describe('Home Component', () => {
  test('component match the snapshot', () => {
    const data = {
      name: "Apple",
      symbol: "APPL",
      price: 25
    }
    const hero = render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero data={data} />
        </BrowserRouter>
      </Provider>,
    );
    expect(hero).toMatchSnapshot();
  });
});
