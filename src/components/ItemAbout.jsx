export default function ItemAbout({ item }) {
  const { id, name, category } = item;

  return (
    <li>
      #{id}.- {name} as its a {category} language.
    </li>
  );
}
