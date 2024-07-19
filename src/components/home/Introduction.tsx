// components/AboutUs.js
import Image from "next/image";
import styles from "../../styles/homeStyles/introduction.module.css";
import { Lalezar, Poppins } from "next/font/google";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutUs() {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`${basePath}/rightsvg.png`}
          alt='.'
          height={706}
          width={601}
        />
        <div className={`${styles.content} ${lalezar.className}`}>
          <p className={styles.introHeader}>
            custom
            <span className={styles.introHeaderSpan}>
              {" "}
              web app development{" "}
            </span>
            company
          </p>
          <p className={styles.introContent}>
            As a dynamic startup offering comprehensive digital solutions. Our
            goal is to be your one-stop destination for all your digital needs!
          </p>
          <div className={`${styles.exploreBtnContainer} ${poppins.className}`}>
            <button className={styles.exploreServiceBtn}>
              Explore our service
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightImagesContainer}>
        <Image
          src={`${basePath}/leftSvg.png`}
          alt='.'
          width={721}
          height={710}
        />
        <div className={styles.bottomImageContainer}>
          <Image
            src={`${basePath}/services.png`}
            alt='.'
            width={780}
            height={603}
          />
        </div>
      </div>
    </div>
  );
}
