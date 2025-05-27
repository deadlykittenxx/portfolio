// app/page.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import styles from './styles/main.module.css';
import PageWrapper from './components/PageWrapper';
const HomePage: React.FC = () => {
  return (
    <div className={`container`}>
      <PageWrapper>
        <Navigation /> {/* add navigation component */}



        <div className={`${styles.container} ${styles.casestudyList}`}>
          <hr id="casestudy"></hr>
          <h1>Case Study</h1>
          <div className={styles.casestudyItem}>
            <Link href="/ai-act"><img className={styles.mainImage} src="/case-study/ai-act.webp" alt="UX Case Study" /></Link>
            <div className={styles.casestudyDescription}>
              <Link href="/ai-act">
                <div className={styles.casestudyDescriptionDetails}>
                  <p>2024</p>
                  <h1>AI Act Game</h1>
                  <p>Can gamifying law bridge the gap between public understanding and AI regulation?
                  </p>

                  <div className="chipsContainer">
                    <h5 className="chips">UI/UX design</h5>
                    <h5 className="chips">Quantitative study</h5>
                    <h5 className="chips">Gamification</h5>
                  </div>
                </div>
              </Link>
              <div className={styles.godetails}>
                <Link href="/ai-act"><h5>View details</h5></Link>
                <Link href="/ai-act"><img className={styles.icon} src="/pixel-arrow.svg" alt="Arrow icon" /></Link>
              </div>


            </div>
          </div>


          <div className={styles.casestudyItem}>
            <Link href="/shaf"><img className={styles.mainImage} src="/case-study/shaf.webp" alt="UX Case Study" /></Link>
            <div className={styles.casestudyDescription}>
              <Link href="/shaf">

                <div className={styles.casestudyDescriptionDetails}>
                  <p>2022</p>
                  <h1>SHAF</h1>
                  <p>A sharing economy system that can handle food waste in smart way for single-person households
                  </p>

                  <div className="chipsContainer">
                    <h5 className="chips">UI/UX design</h5>
                    <h5 className="chips">Mobile</h5>
                  </div>
                </div>

              </Link>

              <div className={styles.godetails}>
                <Link href="/shaf"><h5>View details</h5></Link>
                <Link href="/shaf"><img className={styles.icon} src="/pixel-arrow.svg" alt="Arrow icon" /></Link>
              </div>


            </div>
          </div>



          {/* <div className={styles.casestudyItem}>
          <img className={styles.mainImage} src="/case-study/world.webp" alt="UX Case Study" />
          <div className={styles.casestudyDescription}>
            <div>
              <p>2023</p>
              <h1>World</h1>
              <p>The limits of my language means the limits of my world! How could we make our world greater?
              </p>

              <div className="chipsContainer">
                <h5 className="chips">UI/UX design</h5>
                <h5 className="chips">Mobile</h5>
              </div>
            </div>

            <div className={styles.godetails}>
              <Link href="/"><h5>View details</h5></Link>
              <Link href="/"><img className={styles.icon} src="/pixel-arrow.svg" alt="Arrow icon" /></Link>
            </div>


          </div>
        </div> */}
        </div>
      </PageWrapper>
    </div>
  );
};

export default HomePage;
