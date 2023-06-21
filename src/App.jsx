import Home from "./components/pages/home/home";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import ProductList from "./components/common/ProductsList";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";

function App() {
  const Saludar = "Hola, Bienvenidos!";

  return (
    <div>
      <Home />
      <Navbar />
      <ItemListContainer Saludar={Saludar} />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
