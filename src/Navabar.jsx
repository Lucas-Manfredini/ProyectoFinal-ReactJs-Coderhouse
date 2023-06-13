import ListadoDeNavbar from "./ListadoDeNavbar";

const Navbar = () => {
  const ingresar = () => {
    console.log("has iniciado sesion");
  };

  let nombreUsuario = "pepito";

  let nombre = "juan";
  return (
    <header>
      <ListadoDeNavbar />
      <h2 style={{ color: "steelblue" }}>Logo</h2>

      <button onClick={ingresar}>Iniciar sesion</button>

      <h3> {nombreUsuario} </h3>
      <h3> {2 + 2} </h3>
    </header>
  );
};

export default Navbar;
