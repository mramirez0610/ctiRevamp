import styles from "@scss/components/prices.module.scss";

export default function Prices(props) {
  const day = props.day;
  const bundle = props.bundle;

  return (
    <section>
      <div className={styles.prices}>
        <h1>Our Prices</h1>
        <div className={styles.cards}>
          <h2 className={styles.header}>Climb for a day!</h2>

          <div className={styles.dayUse}>
            <div className={styles.card}>
              <h2>Have your own gear?</h2>
              <div className={styles.inner}>
                {day.noGear.map((day, index) => (
                  <div key={index}>
                    <h3>
                      {day.name} - {day.price}
                    </h3>
                    <h5>{day.desc}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h2>Need to use ours?</h2>
              <div className={styles.inner}>
                {day.gear.map((day, index) => (
                  <div key={index}>
                    <h3>
                      {day.name} - {day.price}
                    </h3>
                    <h5>{day.desc}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className={styles.header}>Climb for a while!</h2>

          <div className={styles.memberships}>
            <div className={styles.card}>
              <h2>Get a membership!</h2>
              <div className={styles.inner}>
                {bundle.memberships.map((m, index) => (
                  <div key={index}>
                    <h3>
                      {m.name} - {m.price}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.card}>
              <h2>Want a punch pass?</h2>
              <div className={styles.inner}>
                {bundle.passes.map((pass, index) => (
                  <div key={index}>
                    <h3>
                      {pass.name} - {pass.price}
                    </h3>
                    <h5>{pass.desc}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
