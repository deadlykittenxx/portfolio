

'use client';
import { useState } from 'react';
import React from 'react';
import Navigation from '../components/Navigation-bar';
import PageWrapper from '../components/PageWrapper';
import styles from '../styles/aboutme.module.css';


const events = [
    { year: '2025', description: 'Internship @ Microfluidics Innovation Center' },
    { year: '2024-2025', description: 'Human-Computer Interaction Master Program @ University Paris-Saclay' },
    { year: '2021-2023', description: 'CDD/CDI @ Subak Company' },
    { year: '2016-2022', description: 'Computer Science Bachelor Program @ Keimyung University' }
];


const AboutPage: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`container ${styles.background}`}>

            <Navigation />
            <PageWrapper>
                <div className={styles.folderWrapper}>
                    <div className={`${styles.folder}`} onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className={styles.coverContainer}>
                            <img src="/file-cover.webp" alt="Cover" className={styles.cover} />
                            <img src="/file-cover-inside.webp" alt="Cover" className={styles.coverInside} />
                        </div>
                        {/* <img src="/file-cover-inside.png" alt="Inside Left Cover" className={styles.coverInside} /> */}
                        <div className={styles.paper}>
                            <img src="/file-paper.webp" alt="Paper" className={styles.paperBg} />
                            <div className={styles.paperText}>
                                {/* <table className={styles.table}>
                                    <tbody>
                                        <tr>
                                            <td className={styles.middleCell} rowSpan={4}>
                                                <img src="/profile.png" alt="Profile picture" className={styles.profilePicture} />

                                            </td>
                                            <td className={styles.cell}>
                                                <h2>Yeajin AHN</h2>
                                                <p>Interaction/UX Desginer</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.cell}>
                                                <p>Based in Paris, France</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.cell}>
                                                <p>Contact 96yean@gmail.com</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.cell}>
                                                <p>Portfolio yeajin-ahn.fr/</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className={styles.fullWidth} colSpan={2}>
                                                <h4>About me</h4>

                                                <p>

                                                    I started my academic journey in computer science in Korea. While building software, I often noticed that even well-made programs were misunderstood or not used as intended. This led me to believe that design was the missing piece. To bridge technology and user experience, I pursued a Master’s degree in Human-Computer Interaction in Paris. I am currently applying this knowledge as a UX design intern, continuing to deepen my understanding through hands-on experience.
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className={styles.largeCell}>
                                                <p>Timeline</p>
                                            </td>
                                            <td className={styles.cell}>
                                                <p>Traits</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className={styles.tallCell} rowSpan={2}>
                                                <div className={styles.timeline}>
                                                    {events.map((event, index) => (
                                                        <div className={styles.event} key={index}>
                                                            <div className={styles.marker} />
                                                            <div className={styles.content}>
                                                                <h4>{event.year}</h4>
                                                                <p>{event.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            </td>
                                            <td className={styles.cell}>
                                                <p>Software</p>
                                                <p>Photoshop, Illustrator, InDesign, XD,
                                                    Figma, DaVinch Resolve, Unity, Blender</p>
                                                <p>Programming</p>
                                                <p>HTML, CSS, C/C++/C#, Java, Python,
                                                    JavaScript, PHP, jQuery, SQL, Arduino</p>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className={styles.cell}>
                                                <p>Korean ⬤⬤⬤⬤⬤</p>
                                                <p>English ⬤⬤⬤⬤◯</p>
                                                <p>French ⬤⬤⬤◯◯</p>
                                                <p>Chinese ⬤⬤◯◯◯</p>
                                                <p>Japanese ⬤⬤◯◯◯</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className={styles.cell} colSpan={2}>
                                                <p>Awards</p></td>
                                        </tr>
                                        <tr>
                                            <td className={styles.fullWidth} colSpan={2}>
                                                <ul>
                                                    <li><p>France Excellence Scholarship</p></li>
                                                    <li><p>Samsung Software Education Grant</p></li>
                                                    <li><p>Keimyung President's Scholarship</p></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}

                            </div>


                        </div>

                    </div>
                    <img src="/grade-sheet.webp" alt="Profile" className={`${styles.gradeSheet} ${isHovered ? styles.hiddenBehind : ''}`} />
                    <img src="/id-card.webp" alt="Profile" className={styles.profile} />
                </div>



            </PageWrapper>




        </div>
    );
};

export default AboutPage;
