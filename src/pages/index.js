import Hero from "@/components/hero";
import Prices from "@/components/prices";

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
      <Prices />
    </>
  );
}
