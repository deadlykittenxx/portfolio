'use client';

import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} Yeajin Ahn. All rights reserved.</p>
        {/* <div className={styles.links}>
          <a href="mailto:96yean@gmail.com">Contact</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
