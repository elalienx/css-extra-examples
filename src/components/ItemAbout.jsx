export default function ItemAbout({ item }) {
  const { id, name, category } = item;

  return (
    <li className="proportional-scale">
      #{id}.- {name} as its a {category} language.
    </li>
  );
}
