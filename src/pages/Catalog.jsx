import CallBack from "../component/CallBack/CallBack";
import Statistics from "../component/Statistics/Statistics";
import CatalogContainer from "../component/Catalog/CatalogContainer";

const Catalog = () => {
  return (
    <>
      <section>
        <CatalogContainer />

        <CallBack />
        <Statistics />
      </section>
    </>
  );
};

export default Catalog;
