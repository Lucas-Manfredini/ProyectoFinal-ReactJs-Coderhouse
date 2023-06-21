import "./ItemList.css";
const ItemList = ({ NombreList, Saludar }) => {
  return (
    <div>
      <h1>{NombreList}</h1>
      <h2 className="ContenedorItemList">{Saludar}</h2>
    </div>
  );
};

export default ItemList;
