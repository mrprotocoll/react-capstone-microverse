import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './Details';
import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
