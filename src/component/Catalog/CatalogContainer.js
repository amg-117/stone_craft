import "./Catalog.css";
import Items from "./Itmes";
import Mekegi from "./Mekegi.jpg";
import Derbent from "./Derbent.jpg";
import Kasp from "./Kasp.jpg";
import Hasavyurt from "./Hasavyurt.jpg";
import Mahach from "./Mahach.jpg";
import Filters from "./Filters";

const items_bd = [
  {
    id: 1,
    name: "Дербентский камень",
    image: Derbent,
    size: "230x200x25",
    price: "10000",
    old_price: "12500",
  },
  {
    id: 2,
    name: "Мекегинский камень",
    image: Mekegi,
    size: "310x330x30",
    price: "17500",
    old_price: "21000",
  },
  {
    id: 3,
    name: "Хасавюртоский гранит",
    image: Hasavyurt,
    size: "180x200x20",
    price: "9300",
    old_price: "10900",
  },
  {
    id: 4,
    name: "Каспийский песчанник",
    image: Kasp,
    size: "350x330x28",
    price: "14800",
    old_price: "17000",
  },
  {
    id: 5,
    name: "Махачкалинский кирпич",
    image: Mahach,
    size: "210x230x21",
    price: "12500",
    old_price: "14500",
  },
];

const CatalogContainer = () => {
  return (
    <>
      <section className="catalog">
        <Filters />
        <Items items={items_bd} />
      </section>
    </>
  );
};

export default CatalogContainer;
