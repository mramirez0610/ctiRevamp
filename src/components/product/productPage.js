import Head from "next/head";
import BackgroundImage from "@/components/product/backgroundImage";
import Banner from "@/components/product/banner";
import PriceCards from "@/components/product/priceCards";
import styles from "@scss/pages/priceCards.module.scss";

export default function ProductPage({ attributes }) {
  const imageObj = {
    src: attributes.image.desk,
    srcMobile: attributes.image.mobile,
    alt: attributes.image.alt || "",
  };

  const pricingCategories = Object.keys(attributes.pricing).map((key) => {
    const category = attributes.pricing[key];
    return {
      title: category.title,
      data: category.prices,
    };
  });

  const bannerObj = {
    title: attributes.banner.title,
    headline: attributes.banner.headline,
    desc: attributes.banner.desc,
    callToAction: attributes.banner.callToAction,
  };

  return (
    <>
      <Head>
        <title>{attributes?.metaTitle || `${bannerObj.title} — CTI`}</title>
        <meta
          name="description"
          content={attributes?.metaDescription || bannerObj.desc}
        />
        <link rel="canonical" href="https://your-domain.com/memberships" />
        <meta
          property="og:title"
          content={attributes?.metaTitle || bannerObj.title}
        />
        <meta
          property="og:description"
          content={attributes?.metaDescription || bannerObj.desc}
        />
        <meta property="og:image" content={bannerObj.src} />
      </Head>

      <section className={styles.sectionComponent}>
        <article>
          <BackgroundImage image={imageObj} />
          <Banner banner={bannerObj} />
          <PriceCards pricingCategories={pricingCategories} />
        </article>
      </section>
    </>
  );
}
