const { default: Navbar } = require("components/Navbar");
const { Provider } = require("react-redux");
const { BrowserRouter } = require("react-router-dom");
const { default: store } = require("redux/store");

describe("Navbar Component", () => {
    test("component match the snapshot",() => {
        const navbar = render(
            <Provider store={store}>
              <BrowserRouter>
                <Navbar />
              </BrowserRouter>
            </Provider>,
        );
        expect(navbar).toMatchSnapshot();
    })
})