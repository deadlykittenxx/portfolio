'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';


const Navigation: React.FC = () => {


  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${styles.navbarVisible}`}>
        <div className={styles.navbar_container}>
          <Link href="/"><img src="/wing.svg" alt="Yeajin AHN Logo" className={styles.logo} /></Link>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#casestudy">Projects</Link></li>
            <li><Link href="mailto:96yeean@gmail.com" >Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );

};

export default Navigation;