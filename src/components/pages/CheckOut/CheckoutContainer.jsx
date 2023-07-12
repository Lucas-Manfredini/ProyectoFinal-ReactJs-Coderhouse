const CheckoutContainer = () => {
  const FuncionDelFormulario = () => {};
  return (
    <div>
      <h1>Checkout page</h1>
      <form onSubmit={FuncionDelFormulario}>
        <input type="text" placeholder="Ingrese su Nombre" name="Nombre" />
        <input type="text" placeholder="Ingrese su Apellido" name="Apellido" />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
