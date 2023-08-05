import ItemListContainer from "../components/pages/ItemList/ItemsListContainer";
import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import FormFormik from "../components/pages/FormFormik/FormFormik";
import HomeContainer from "../components/pages/home/HomeContainer";
import Dashboard from "../components/pages/Dashbord/Dashbord";

export const routes = [
  {
    id: "Home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "Camaras",
    path: "/category/Camaras",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "CheckOut",
    path: "/category/CheckOut",
    Element: FormFormik,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  },
  {
    id: "Dashbord",
    path: "/category/Dashbord",
    Element: Dashboard,
  },
];
