'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import shared from '../styles/project.module.css';
import styles from '../styles/reelnotes.module.css';
import PageWrapper from '../components/PageWrapper';
import * as Icons from '../components/icons';


const ReelnotesPage: React.FC = () => {
    return (
        <div>

            <Navigation />
            <div className={`${shared.background} ${styles.background}`}>
            </div>

            <PageWrapper>
                <div className={`${shared.header}`}>
                    <div className="chipsContainer">
                        <h5 className="chips">Product design</h5>
                        <h5 className="chips">Frontend development</h5>
                        <h5 className="chips">Backend development</h5>
                    </div>

                    <div className={`${shared.title}`}>
                        <h1>Reelnotes</h1>
                        <h4>Movie streaming site inspired by the nostalgic experience of discovering handwritten notes within DVDs from Blockbuster rentals</h4>
                    </div>

                    <div className={`${shared.headerDetail}`}>
                        <div className="box">
                            <h6>Duration</h6>
                            <p>2.5 months</p>
                        </div>

                        <div className="box">
                            <h6>Role</h6>
                            <p>Product designer/Frontend·Backend developer</p>
                        </div>
                    </div>
                </div>


                <div className={`${shared.container}`}>
                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Background</h4>
                        </div>

                        <div>
                            <p>
                                Even though most people watch movies on streaming sites these days, typically like Netflix, I still have fond memories of going to the DVD shop just around the corner in my neighborhood to rent DVDs. Sometimes I would find handwritten notes left by other people, and it still remains a fun and memorable experience. I want to recreate this feeling of watching movies with others in a web environment.
                            </p>
                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Process</h4>
                        </div>

                        <div className={`flex ${shared.process}`}>
                            <div>
                                <h6>01</h6>
                                <h5>Understand</h5>
                                <p>Desk research</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>02</h6>
                                <h5>Ideate</h5>
                                <p>Brainstorming
                                    <br></br>
                                    Design space
                                </p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>


                            <div>
                                <h6>03</h6>
                                <h5>Design</h5>
                                <p>User scenario</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>


                            <div>
                                <h6>04</h6>
                                <h5>Implement</h5>
                                <p>Wireframe<br></br>Prototype</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Problem & Goal</h4>
                        </div>

                        <div className={`flex-column ${styles.problem}`}>
                            <div>
                                <h4 className={`${shared.h4Title}`}>Modern streaming platforms often make movie watching feel like a solitary and disconnected experience. </h4>
                                <p>The joy of asynchronously sharing and discovering thoughts or reactions about specific movie scenes, much like stumbling upon someone else's handwritten notes or commentaries in a rented DVD, has faded away.</p>
                            </div>

                            <div>
                                <h4 className={`${shared.h4Title}`}>Watching movies with people at different times and locations often fragments the shared experience.  </h4>
                                <p>It's tough to have comments stay tied to the exact moment in the film. General chat messages or social media comments aren't directly linked to specific moments in the film, making them ephemeral and hard to retrieve later.</p>
                            </div>

                            <div className="flex-column">
                                <h4>Goal</h4>
                                <h2 className="fw-3">
                                    Create an interactive platform that weaves movie watching into an analog experience of enduring record across time and space
                                </h2>
                            </div>

                            {/* <div className="flex-column">
                                <h4>Challenges</h4>
                                <div className={`flex ${styles.challenges}`}>
                                    <div>
                                        <h5>Limited resources</h5>
                                        <p>With only two team members, it was crucial to carefully prioritize tasks and clearly assign individual responsibilities.</p>
                                    </div>

                                    <div>
                                        <h5>Technical complexity</h5>
                                        <p>Given the likelihood of starting with a small team in the project's early stages, carefully managing task prioritization was crucial to developing core features and successfully launching the product. Close collaboration was essential to ensure the most vital functionalities were implemented.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Brainstorming</h4>
                        </div>

                        <div>
                            <p>
                                Our process began by brainstorming various features. We explored a wide array of potential features, considering how users could interact with films, their records, and each other in novel, immersive ways.
                                <br></br><br></br>
                                During this phase, various methods for leaving 'traces' on films were proposed.
                            </p>

                            <div className={`flex ${styles.brainstorming}`}>
                                <img src="/case-study/reelnotes/brainstorming_01.png" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_02.png" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_03.png" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_04.png" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_05.png" alt="Brainstorming idea" />
                            </div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Design space</h4>
                        </div>
                        <div>
                            <p>
                                To objectively evaluate our brainstormed ideas and identify the core feature that best aligned with our goal, we used a Design Space. This framework allowed us to see all potential features through five critical lenses: <b>Precision of Record, Format of Record, Immediacy of Sharing, Analog Feel Implementation, and Integration with Film Context</b>. By mapping where each idea stood on these dimensions, we could clearly see their strengths and weaknesses.
                            </p>

                            <div className={`${styles.designSpace}`}>
                                <img src="/case-study/reelnotes/designspace.png" alt="Design space" />
                                {/* 
                                <div className={`flex-column`}>
                                    <div className={`flex ${styles.designSpaceTitle}`}>
                                        <h5 className={`chips-white-square`}>01</h5>
                                        <p><b>Precision of Record</b>: The exactness of a 'trace' in linking to a specific film moment and location.</p>
                                    </div>
                                </div>

                                <div className={`flex-column`}>
                                    <div className={`flex ${styles.designSpaceTitle}`}>
                                        <h5 className={`chips-white-square`}>02</h5>
                                        <p><b>Format of record</b>: The medium through which the 'trace' is captured.</p>
                                    </div>
                                </div>

                                <div className={`flex-column`}>
                                    <div className={`flex ${styles.designSpaceTitle}`}>
                                        <h5 className={`chips-white-square`}>03</h5>
                                        <p><b>Immediacy of sharing</b>: How quickly and contextually is the 'trace' delivered and interactable by others?</p>
                                    </div>
                                </div>

                                <div className={`flex-column`}>
                                    <div className={`flex ${styles.designSpaceTitle}`}>
                                        <h5 className={`chips-white-square`}>04</h5>
                                        <p><b>Analog feel implementation</b>: The directness with which analog aesthetics  are brought into the digital environment.</p>
                                    </div>
                                </div>

                                <div className={`flex-column`}>
                                    <div className={`flex ${styles.designSpaceTitle}`}>
                                        <h5 className={`chips-white-square`}>05</h5>
                                        <p><b>Integration with film context</b>: The extent to which 'trace' activities enhance or disrupt the film's core narrative, visual, or auditory context.</p>
                                    </div>
                                </div> */}

                            </div>
                            <h4>Design Space Analysis</h4>
                            <p>
                                Our analysis results made it clear that the idea of 'Direct on-screen notes' is the core interaction that most perfectly realizes our project goal. This feature aligned with our goal of reviving the analog experience as a record unconstrained by time and space for movie watching.
                                <br></br><br></br>
                                This feature also best captured the analog sensibility, like making actual notes, by directly leaving traces on the content itself. Crucially, seamless integration with the movie context allowed annotations to appear directly on screen, making the 'record' a part of the 'experience' unconstrained by time and space.

                            </p>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Persona</h4>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>


            </PageWrapper>
        </div>
    );
};

export default ReelnotesPage;
