const { render } = require('@testing-library/react');
const { default: Details } = require('components/Details');
const { Provider } = require('react-redux');
const { BrowserRouter } = require('react-router-dom');
const { default: store } = require('redux/store');

describe('Details route Component', () => {
  test('component match the snapshot', () => {
    const details = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(details).toMatchSnapshot();
  });
});
