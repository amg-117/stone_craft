import "./Catalog.css";
import ItemCard from "./ItemCard";

const Items = (props) => {
  return (
    <section className="catalog_items">
      {props.items.map((el) => (
        <ItemCard key={el.id}>
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>Размер: {el.size}</p>
          <p>Цена: {el.price}</p>
          <p>Старая цена: {el.old_price}</p>
          <button>Добавить в корзину</button>
        </ItemCard>
      ))}
    </section>
  );
};

export default Items;
