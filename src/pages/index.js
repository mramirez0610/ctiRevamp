import Hero from "@/components/hero";
import Head from "next/head";
import Script from "next/script";
import NavigationCards from "@/components/navigationCards";

export default function Home() {
  return (
    <>
      <Head>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="lazyOnload"
        />
      </Head>
      <Hero />
      <NavigationCards />
    </>
  );
}
