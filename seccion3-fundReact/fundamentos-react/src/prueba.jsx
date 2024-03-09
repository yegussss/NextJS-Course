const Prueba = () => {
  const titulo = 'Bienvenidos a mi primer proyecto con React.js'
  const clases = {
    primary:'text-primary',
    info:'text-info'
  }

  return(
    <div className="container">
      <h1 className={clases.primary}>{titulo}</h1>
      <p className={clases.info}>Estoy haciendo algunas pruebas</p>
    </div>
  );
};

export default Prueba;
