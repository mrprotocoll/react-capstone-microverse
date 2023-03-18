const { render } = require('@testing-library/react');
const { default: Home } = require('components/Navbar');
const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { default: store } = require('redux/store');

describe('Home Component', () => {
  test('component match the snapshot', () => {
    const home = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});
