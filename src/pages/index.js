import Hero from "../components/hero";

const types = [
  "Bouldering",
  "Top Ropes",
  "Auto Belays",
  "Lead Climbing",
  "Hangboards",
  "Campus Boards",
];

export default function Home() {
  return (
    <>
      <Hero />
      <section>
        <h1>Welcome to Climb Time Indy</h1>
        <p>
          Climb Time Indy is the best climbing gym in Indianapolis. We offer a
          variety of climbing walls, fitness classes, and gear for sale. Fun for
          all ages and abilities!
        </p>

        <h1>Want to climb?</h1>
        <p>
          We have a ton of great options for all types of climbers- from new to
          experienced. In our gym we have
        </p>
        <ul>
          {types.map((type, index) => (
            <li key={index}>
              <p>{type}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
