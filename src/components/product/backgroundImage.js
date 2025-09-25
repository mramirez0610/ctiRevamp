import styles from "@scss/components/backgroundImage.module.scss";
import { useState, useEffect } from "react";

export default function BackgroundImage({ image }) {
  const [currentSrc, setCurrentSrc] = useState(image.src); //desktop bg default

  useEffect(() => {
    //checks to see if screen width is tablet sized or smaller
    const updateImageSrc = () =>
      window.innerWidth <= 1050
        ? setCurrentSrc(image.srcMobile)
        : setCurrentSrc(image.src);

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    //cleaning up
    return () => window.removeEventListener("resize", updateImageSrc);
  }, [image.src, image.srcMobile]);

  return (
    <div className={styles.backgroundImage}>
      <img
        src={currentSrc}
        alt={image.alt || "banner image"}
        width="100%"
        height="fit-content"
        className={styles.image}
      />
    </div>
  );
}
