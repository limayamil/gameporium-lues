import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ name, image, price, id }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="cardbody">
        <h5 className="card-title text-center">
          <strong>{name}</strong>
        </h5>
        <p className="card-text text-center">${price}</p>
        <div className="actions text-center">
          <Link to={`/item/${id}`}>
            <button className="btn-secondary">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
