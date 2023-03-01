import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./container/Header";
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found !!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
