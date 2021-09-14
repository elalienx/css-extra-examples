// CATEGORY.JSX

// Project files
import data from "./data.json";
import Item from "./Item";

export default function Category() {
  // Derived state

  // this function is called 0, 1 or ininite times
  // or we know that is only called during the creation of the component
  // except when... the code is super long

  const filteredData = data.filter((item) => item.category === "functional");
  const Items = filteredData.map((item) => <Item key={item.id} item={item} />);

  return (
    <div id="category">
      <h2>Category</h2>
      <p>random text goes here...</p>
      <ul>{Items}</ul>
    </div>
  );
}
