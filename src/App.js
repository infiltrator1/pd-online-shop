import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import DefaultLayout from "./layouts/DefaultLayout"; 
import ShopList from "./pages/ShopList";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import CompletedOrder from "./pages/CompletedOrder";


function App() {
  
  return (
    <BrowserRouter>
    <DefaultLayout/>
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/shopList" element={<ShopList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/completedorder/:id" element={<CompletedOrder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
