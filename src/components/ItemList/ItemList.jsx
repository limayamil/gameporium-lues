import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-4">
          <Item name={item.name} image={item.image} price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
