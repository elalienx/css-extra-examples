export default function CategoryCard({ item }) {
  const { imageURL, title, description } = item;

  return (
    <article className="card">
      <img className="image" src={imageURL} alt={title} />
      <div className="container">
        <div className="center">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
