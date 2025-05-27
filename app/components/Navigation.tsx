'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (


    <div className={styles.nav_background}>
      <div className={styles.container}>

        <div className={`${styles.fullscreenLogo} ${scrolled ? styles.fadeOut : ''}`}>
          <p>2025<br></br></p>
          <img className={styles.fullLogo} src="/logo.svg" alt="Yeajin AHN Logo" />
          <div>
            <p>Welcome to my portfolio! <br></br>I specialize in creating user-centered designs to make complex information more accessible, drawing from my background in development and design.</p>
          </div>

          <div className={styles.nav_about_me}><Link href="/about">About me</Link></div>
        </div>

        <nav className={`${styles.navbar} ${scrolled ? styles.navbarVisible : styles.navbarHidden}`}>
          <div className={styles.navbar_container}>
            <img src="/wing.svg" alt="Yeajin AHN Logo" className={styles.logo} />
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#casestudy">Projects</Link></li>
              <li><Link href="mailto:96yeean@gmail.com">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
