import styles from "@/scss/components/navigationCards.module.scss";
import CardComponent from "@/components/cardComponent";
import Link from "next/link";
import ImageComponent from "./imageComponent";
import photo0 from "../../public/img/photo0.webp";
import photo1 from "../../public/img/photo1.webp";
import photo2 from "../../public/img/photo2.webp";
import photo3 from "../../public/img/photo3.webp";
import Gunks from "../../public/img/GunksClimber.webp";
import EthanBright from "../../public/img/EthanBright.webp";
import EthanClimber from "../../public/img/EthanClimber.webp";

export default function NavigationCards() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <Link href="/daypass">
            <CardComponent
              title="Daypass"
              description="View our rates and gear rentals"
              image={photo1}
              // link="/daypass"
            />
          </Link>
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <Link href="/memberships">
            <CardComponent
              title="Membership"
              description="view our rates for a membership for climbing"
              image={EthanClimber}
            />
          </Link>
        </div>
      </div>
      <div className={styles.gridItem}>
        <Link href="/punch-pass">
          <CardComponent
            title="Punch Pass"
            description="view our options for a punch pass for multi-day climbing"
            image={Gunks}
          />
        </Link>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <Link href="/giftCards">
            <CardComponent
              title="Gift Cards"
              description="Purchase gift cards for that special climber in your life"
              image={photo0}
            />
          </Link>
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <Link href="/groupBooking">
            <CardComponent
              title="Group Events and Parties"
              description="Schedule group events and parties for a group day out"
              image={EthanBright}
            />
          </Link>
        </div>
      </div>
      <div className={styles.gridItem}>
        <div className={styles.cardContainer}>
          <Link href="/classes">
            <CardComponent
              title="Classes"
              description="View our classes and their schedules"
              image={photo3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
