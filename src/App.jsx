import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsListContainer from "./components/pages/ItemList/ItemsListContainer";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/home";
import CheckoutContainer from "./components/pages/CheckOut/CheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/Camaras" element={<ItemsListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/category/CheckOut" element={<CheckoutContainer />} />
        </Route>
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
