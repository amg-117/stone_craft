import "./Catalog.css";

const Filters = () => {
  return (
    <aside className="catalog_filters">
      <label>
        <input type="checkbox" />
        Облицовачные
      </label>
      <label>
        <input type="checkbox" />
        Отделочные
      </label>
      <label>
        <input type="checkbox" />
        Фасадные
      </label>
      <label>
        <input type="checkbox" />
        Для орграждений
      </label>
    </aside>
  );
};

export default Filters;
