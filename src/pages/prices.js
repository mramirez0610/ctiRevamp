import price_data from "../data/prices.json";

export default function Prices() {
  return (
    <section>
      <h1>Prices</h1>
      <h2>Passes</h2>
      {price_data.prices.Passes.map((pass, index) => (
        <div key={index}>
          <h3>
            {pass.name} - {pass.price}
          </h3>
        </div>
      ))}
      <h2>Membership Prices</h2>
      {price_data.prices.Memberships.map((membership, index) => (
        <div key={index}>
          <h3>
            {membership.timePeriod} - {membership.price}
          </h3>
        </div>
      ))}
    </section>
  );
}
