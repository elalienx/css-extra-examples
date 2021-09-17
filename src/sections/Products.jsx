// Project files
import data from "../data/products.json";
import CardProduct from "../components/CardProduct";

export default function Products() {
  // Components
  const Cards = data.map((item) => <CardProduct key={item.id} item={item} />);

  return (
    <div id="products">
      <h2 className="container">Products</h2>
      <section className="cards">{Cards}</section>
    </div>
  );
}
