import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="row mt-5">
      {items.map((item) => (
        <div key={item.id} className="col-md-4 mb-5">
          <Item
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
