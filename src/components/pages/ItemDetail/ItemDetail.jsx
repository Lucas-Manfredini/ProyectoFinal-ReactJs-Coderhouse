import CounterContainer from "../../common/Counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito, StockEnCarrito }) => {
  return (
    <div className="ContenedorItemDetail">
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <CounterContainer
        StockEnCarrito={StockEnCarrito}
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetail;
