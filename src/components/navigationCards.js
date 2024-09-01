import styles from "@/scss/components/navigationCards.module.scss";
import CardComponent from "@/components/cardComponent";
import ImageComponent from "./imageComponent";
import photo0 from "../assets/photo0.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

export default function NavigationCards() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <CardComponent
            title="Daypass"
            description="View our rates and gear rentals"
            image={photo1}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <CardComponent
            title="Membership"
            description="view our rates for a membership for climbing"
            image={photo2}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <CardComponent
          title="Punch Pass"
          description="view our options for a punch pass for multi-day climbing"
          image={photo3}
        />
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <CardComponent
            title="Gift Cards"
            description="Purchase gift cards for that special climber in your life"
            image={photo0}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <CardComponent
            title="Group Events and Parties"
            description="Schedule group events and parties for a group day out"
            image={photo2}
          />
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <CardComponent
            title="Classes"
            description="View our classes and their schedules"
            image={photo3}
          />
        </div>
      </div>
    </div>
  );
}
