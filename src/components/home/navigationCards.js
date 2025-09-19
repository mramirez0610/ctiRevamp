import styles from "@scss/components/navigationCards.module.scss";
import CardComponent from "@components/home/cardComponent";
import Link from "next/link";

export default function NavigationCards() {
  const navOptions = [
    {
      href: "/daypass",
      title: "Daypass",
      description: "View our rates and gear rentals",
      image: "/img/photo1.webp",
    },
    {
      href: "/memberships",
      title: "Membership",
      description: "View our rates for a membership for climbing",
      image: "/img/EthanClimber.webp",
    },
    {
      href: "/punch-pass",
      title: "Punch Pass",
      description: "View our options for a punch pass for multi-day climbing",
      image: "/img/GunksClimber.webp",
    },
    {
      href: "/giftCards",
      title: "Gift Cards",
      description: "Purchase gift cards for that special climber in your life",
      image: "/img/photo0.webp",
    },
    {
      href: "/groupBooking",
      title: "Group Events and Parties",
      description: "Schedule group events and parties for a group day out",
      image: "/img/EthanBright.webp",
    },
    {
      href: "/classes",
      title: "Classes",
      description: "View our classes and their schedules",
      image: "/img/photo3.webp",
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {navOptions.map((option, index) => (
        <div className={styles.gridItem} key={index}>
          <div className={styles.cardContainer}>
            <Link href={option.href}>
              <CardComponent
                title={option.title}
                description={option.description}
                image={option.image}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
