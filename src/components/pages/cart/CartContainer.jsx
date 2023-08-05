import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Esta seguro de eliminar el contenido?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si,Limpiar",
      denyButtonText: `No, no Limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Su carro ha sido eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Su carro se mantiene igual", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div>
      <h1>Usted se encuentra en nuestro carro de compras | LM Photo</h1>

      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ width: "200px", border: "2px solid bisque" }}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteById(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button variant="outlined" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/category/CheckOut">
            <Button variant="outlined">Terminar compra</Button>
          </Link>
        </>
      )}

      <h2>El total del carrito es : {total} </h2>
    </div>
  );
};

export default CartContainer;
