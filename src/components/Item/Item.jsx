import "./Item.css";

const Item = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="cardbody">
        <h5 className="card-title text-center">
          <strong>{name}</strong>
        </h5>
        <p className="card-text text-center">${price}</p>
        <div className="actions text-center">
          <button className="btn-secondary">Ver detalle</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
