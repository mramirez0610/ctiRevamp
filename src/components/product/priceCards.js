import ReactMarkdown from "react-markdown";
import styles from "@scss/pages/priceCards.module.scss";

export default function PriceCards({ pricingCategories }) {
  return (
    <div className={styles.priceCards}>
      {pricingCategories.map((category, index) => (
        <div className={styles.priceCard} key={index}>
          <div className={styles.backdrop}></div>
          <div className={styles.priceCardInfo}>
            <ul>
              <h1 className={styles.priceTitle}>{category.title}</h1>
              {category.data.map((item, k) => (
                <div key={k}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.priceInfo}>
                    Price - <span className={styles.price}>${item.price}</span>
                  </p>
                  {item.length && (
                    <p className={styles.priceLength}>Length - {item.length}</p>
                  )}
                  <div className={styles.priceDesc}>
                    <ReactMarkdown>{item.desc}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
