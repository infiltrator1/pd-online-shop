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

function App() {
  
  return (
    <BrowserRouter>
    <DefaultLayout/>
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="shopList" element={<ShopList />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
