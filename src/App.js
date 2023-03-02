import './App.css';

import { BrowserRouter, Route,Routes } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
