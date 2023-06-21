import ItemList from "./ItemList";

const ItemListContainer = ({ Saludar }) => {
  let NombreList = "ReactJs Coderhouse";
  return <ItemList NombreList={NombreList} Saludar={Saludar} />;
};

export default ItemListContainer;
