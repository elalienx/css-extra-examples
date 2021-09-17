// Project files
import data from "../data/category.json";
import ItemAbout from "../components/ItemAbout";

export default function About() {
  // Properties
  /**
   * About derived state:
   * this function is called 0, 1 or ininite times
   * or we know that is only called during the creation of the component
   * except when... the code is super long
   */
  const filteredData = data.filter((item) => item.category === "functional");

  // Components
  const Items = filteredData.map((item) => (
    <ItemAbout key={item.id} item={item} />
  ));

  return (
    <div id="about">
      <h2>Category</h2>
      <p>random text goes here...</p>
      <ul>{Items}</ul>
    </div>
  );
}
