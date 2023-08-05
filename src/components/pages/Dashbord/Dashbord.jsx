import { Button } from "@mui/material";
import { products } from "../../../productsMock";
import { db } from "../../../FirebaseConfig";
import { addDoc, collection } from "@firebase/firestore";
import "./Dashbord.css";

const Dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };

  return (
    <div className="ContenedorDashbord">
      <h1 className="H1DashBord">Panel de Administrador</h1>
      <Button variant="outlined" onClick={rellenar}>
        Rellenar base de datos Camaras
      </Button>
      <Button href="/">Regresar al Home</Button>
      <Button href="/category/Camaras">Regresar a Camaras</Button>
    </div>
  );
};

export default Dashboard;
