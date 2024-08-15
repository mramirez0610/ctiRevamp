import Hero from "@/components/hero";
import Prices from "@/components/prices";
import Head from "next/head";

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
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Hero />
      <Prices />
    </>
  );
}
