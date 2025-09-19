import styles from "@scss/pages/priceCards.module.scss";

export default function PriceCards({ pricingCategories }) {
  return (
    <div className={styles.pricesCards}>
      {pricingCategories.map((category, index) => (
        <div className={styles.priceCard} key={index}>
          <div className={styles.priceCardInfo}>
            <ul>
              <h1 className={styles.priceTitle}>{category.title}</h1>
              {category.data.map((item, k) => (
                <div key={k}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.priceInfo}>
                    Price - <span className={styles.price}>${item.price}</span>
                  </p>
                  <p className={styles.priceDesc}>{item.description}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
