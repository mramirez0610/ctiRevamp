import styles from "@scss/components/pictureText.module.scss";
import ImageComponent from "@components/imageComponent";
import { useEffect, useState } from "react";

export function PictureLeftTextRight({ picture, text, title }) {
  const [image, setImage] = useState();
  useEffect(() => {
    import(`../../public/img/${picture.name}.webp`).then((img) => {
      setImage(img);
    });
  }, [picture]);
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainerContent}>
        <div className={styles.aboutPhotoContainer}>
          <ImageComponent
            photo={image}
            alt={picture.alt}
            className={styles.photoContainer}
          />
        </div>
        {/* <div className={styles.divLineVertical}></div> */}
        <div className={styles.aboutTextContainer}>
          <h1 className={styles.headerText}>{title}</h1>
          <p className={styles.paragraphText}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export function PictureRightTextLeft({ picture, text, title }) {
  const [image, setImage] = useState();
  useEffect(() => {
    import(`../../public/img/${picture.name}.webp`).then((img) => {
      setImage(img);
    });
  }, [picture]);
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainerContent}>
        <div className={styles.aboutTextContainer}>
          <h1 className={styles.headerText}>{title}</h1>
          <p className={styles.paragraphText}>{text}</p>
        </div>
        {/* <div className={styles.divLineVertical}></div> */}
        <div className={styles.aboutPhotoContainer}>
          <ImageComponent
            photo={image}
            alt={picture.alt}
            className={styles.photoContainer}
          />
        </div>
      </div>
    </div>
  );
}
