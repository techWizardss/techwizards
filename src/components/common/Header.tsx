'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../../styles/header.module.css";
import { useRouter } from 'next/navigation';

const Header = () => {
  const env = 'Production';
  const basePath = env === 'Production' ? '/techwizards' : '';
  const router = useRouter();

  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            <Image
              src={`${basePath}/TECHWIZARDS.png`}
              alt='TECHWIZARDS'
              width={180}
              height={20}
              onClick={() => { router.push('/home') }}
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
              src={`${basePath}/calllcon.png`}
              alt='icon'
              width={16}
              height={16}
            />
            <span className={styles.contactTextSyles}>contact</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
