import price_data from "@/data/prices.json";
import styles from "@/scss/components/prices.module.scss";

export default function Prices() {
  const prices = price_data.prices;

  return (
    <section className={styles.content}>
      <div className={styles.prices}>
        <h1>Our Prices</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Climb for a day!</h2>
            {prices.Passes.map((dayPass, index) => (
              <div key={index}>
                <h3>
                  {dayPass.name} - {dayPass.price}
                </h3>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <h2>Climb for a while!</h2>
            {prices.Memberships.map((membership, index) => (
              <div key={index}>
                <h3>
                  {membership.timePeriod} - {membership.price}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
