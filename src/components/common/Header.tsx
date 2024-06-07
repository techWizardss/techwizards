import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/header.module.css";
const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/TECHWIZARDS.png"
              alt='TECHWIZARDS'
              width={180}
              height={20}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className={styles.linksContainer}>
            <Link href="/about">
              <button className={styles.buttonStyles}>About us</button>
            </Link>
            <Link href="/services">
              <button className={styles.buttonStyles}>Services</button>
            </Link>
            <Link href="/portfolio">
              <button className={styles.buttonStyles}>Portfolio</button>
            </Link>
          </div>
          <div className={styles.contactContainer}>
            <Image
              src={"/calllcon.png"}
              width={16}
              height={16}
              objectFit="contain"
              objectPosition="center"
            />
            <span className={styles.contactTextSyles}>contact</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
