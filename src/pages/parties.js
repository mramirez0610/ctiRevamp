import { attributes, react as HomeContent } from "../../content/ctiHome.md";

export default function Parties() {
  let { title, cats } = attributes;

  return (
    <section>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
