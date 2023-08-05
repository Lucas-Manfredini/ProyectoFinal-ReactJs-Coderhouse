import CartWidget from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  let userRol = "Usuario";

  return (
    <div>
      <div className={"containerNavbar"}>
        <Link className="LinkHome" to="/">
          LM Photo
        </Link>

        <ul className="categories">
          <Link to="/category/Camaras">Camaras</Link>
          <Link to="/category/CheckOut">CheckOut</Link>
        </ul>
        {userRol === "admin" && <Link to="/dashboard">Administrador</Link>}
        <Link className={"BotonAdministrador"} to="/dashboard">
          Administrador
        </Link>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
