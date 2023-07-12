import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
        <Link to="/">LM Photo</Link>

        <ul className="categories">
          <Link to="/category/Camaras">Camaras</Link>
          <Link to="/category/Mochilas">Mochilas</Link>
          <Link to="/category/Flashes">Flashes</Link>
          <Link to="/category/CheckOut">CheckOut</Link>
        </ul>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
