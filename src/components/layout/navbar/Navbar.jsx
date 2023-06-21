import CarritoWidget from "../../common/WidgetCarrito/CarritoWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="ContenedorNavbar">
      <h4>Navbar en React</h4>
      <ul className="ContenedorCategorias">
        <li>Inicio</li>
        <li>Contacto</li>
        <li>Mercado</li>
      </ul>
      <CarritoWidget />
    </div>
  );
};

export default Navbar;
