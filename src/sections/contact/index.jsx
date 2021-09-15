// Project files
import data from "./data.json";
import Card from "./Card";

export default function Contact() {
  // Propeperties
  const Cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div id="contact">
      <h2>Contact</h2>
      <section className="cards">{Cards}</section>
    </div>
  );
}
