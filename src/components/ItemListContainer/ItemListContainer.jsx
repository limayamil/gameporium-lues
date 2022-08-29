import "./ItemListContainer.css";

function ItemListContainer(props) {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>¡Bienvenido <span className="greeting">{props.greeting}</span>!</h2>
      </div>
    </div>
  );
}

export default ItemListContainer;