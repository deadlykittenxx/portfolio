'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import shared from '../styles/project.module.css';
import styles from '../styles/reelnotes.module.css';
import PageWrapper from '../components/PageWrapper';
import * as Icons from '../components/icons';
import StarDivider from '../components/StarDivider';


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
                                <p>Persona
                                    <br></br>
                                    User scenario
                                </p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>


                            <div>
                                <h6>04</h6>
                                <h5>Implement</h5>
                                <p>Prototype<br></br>Development</p>
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
                                <img src="/case-study/reelnotes/brainstorming_01.webp" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_02.webp" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_03.webp" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_04.webp" alt="Brainstorming idea" />
                                <img src="/case-study/reelnotes/brainstorming_05.webp" alt="Brainstorming idea" />
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
                                <img src="/case-study/reelnotes/designspace.webp" alt="Design space" />
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
                            <p>
                                After selecting the core idea to develop from our brainstorming sessions, we defined two personas. Each persona highlighted distinct problems they faced with existing movie streaming sites. Through user scenarios, we then showcased how our system effectively solves these challenges for each of them.
                            </p>
                            <div className={`flex-column ${styles.persona}`}>
                                <div className="flex">
                                    <div className={`${styles.personaImg}`}>
                                        <img className={`${styles.personaImage}`} src="/case-study/reelnotes/persona.webp" alt="Persona" />
                                    </div>
                                    <div className={`flex-column ${styles.personaDescription}`}>
                                        <p>Bocchi |  Detail-oriented cinephile</p>
                                        <div>
                                            <h4>Background</h4>
                                            <p>Bocchi is a highschool student. Beyond just watching movies, she loves analyzing directorial choices or subtle facial expressions, and keeping her own detailed viewing notes. While she enjoys analog note-taking, she's always found it cumbersome to link her notes directly to specific movie scenes.</p>
                                        </div>


                                        <div>
                                            <h4>Problem</h4>
                                            <p>Existing streaming services interrupt her immersion when she pauses to jot down notes in a separate app. Her recorded notes are often disconnected from the actual movie scenes, making them hard to reference later.
                                            </p>
                                        </div>

                                        <div>
                                            <h4>Usage scenario</h4>
                                            <p>As Bocchi watches a film, she pauses at impactful moments to leave detailed annotations with specific timestamps and screen positions.These annotations are organized within his personal library, making it easy to reference. She can click any annotation to jump directly to the relevant scene, allowing her to efficiently verify details.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <hr className="hr-straight"></hr>
                            <div className={`flex-column ${styles.persona}`}>
                                <div className="flex">
                                    <div className={`${styles.personaImg}`}>
                                        <img className={`${styles.personaImage}`} src="/case-study/reelnotes/persona3.webp" alt="Persona" />
                                    </div>
                                    <div className={`flex-column ${styles.personaDescription}`}>
                                        <p>Nijika |  Social viewer</p>
                                        <div>
                                            <h4>Background</h4>
                                            <p>Nijika is a early-20s university student. Although she often watches movies alone, she places high importance on discussing films and sharing emotions with friends. Since they rarely watch together at the same time, real-time communication about movies is a challenge.</p>
                                        </div>


                                        <div>
                                            <h4>Problem</h4>
                                            <p>Discussing movies usually involves sending separate messages or chatting in group apps, which makes it hard to pinpoint exact scenes. Conversations often don't flow well when friends watch the same movie at different times.
                                            </p>
                                        </div>

                                        <div>
                                            <h4>Usage scenario</h4>
                                            <p>Nijika watches a film and leaves a short comment and emotion as an annotation on a particular scene. This annotation immediately appears on her friends' timelines. When her friends watch the same movie later, they discover her annotation and leave a short reply. Maya sees their reactions in real-time, feeling the joy of a shared viewing experience despite being apart.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Flowchart</h4>
                        </div>
                        <div>
                            <p>We proceeded to map out the precise steps users would take within service, based on our understanding of target users through detailed personas. These user flows translate the scenarios into concrete interactions, illustrating the journey users embark on to achieve their goals.</p>

                            <div className={`${styles.userflow}`}>
                                <img src="/case-study/reelnotes/flowchart.webp" alt="User flow" />
                            </div>
                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Hifi Prototype</h4>
                        </div>
                        <div>
                            <p>
                                We made a decision to bypass traditional wireframing and move directly into high-fidelity prototype. This approach was driven by the project's need to rapidly develop core functionalities within a limited timeframe. <br /><br />

                                The high-fidelity prototype allowed us to minimize concerns about UI design or visual aesthetics, letting us focus solely on implementing the features.<br /><br />

                                Below are two key screens from our developed high-fidelity prototype, showcasing the main functionalities:
                            </p>

                            <div className={`flex ${styles.hifi}`}>
                                <div className={`flex-column ${styles.hifi}`}>
                                    <img src="/case-study/reelnotes/proto_movie.webp" alt="Hifi prototype" />
                                    <h5>View annotations on the movie screen</h5>
                                </div>
                                <div className={`flex-column ${styles.hifi}`}>
                                    <img src="/case-study/reelnotes/proto_list.webp" alt="Hifi prototype" />
                                    <h5>Annotation patterns on the timeline</h5>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Implementation</h4>
                        </div>
                        <div>
                            <p>Reelnotes was built with a robust tech stack. The frontend is based on HTML, CSS, and JavaScript, with Bootstrap implementing responsive design. d3.js visualizes annotation pattern, and AJAX updates search results.
                                <br /><br />
                                Operating on an npm-based development environment, the backend handles server logic and application structure using Node.js and Express.js. For data management, a JSON file-based local database was utilized. This will require improvement to a remote database in the future.</p>
                        </div>
                    </div>

                    <StarDivider />
                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Design Deliverables</h4>
                        </div>

                        <div className={`${shared.deliverablesList}`}>
                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Share annotations between users
                                </h2>

                                <p>Users can leave annotations at specific timestamps and positions while watching a movie. These annotations are visible to others at the exact time and location they were added.
                                </p>


                                <video className={`${styles.video}`} autoPlay loop muted playsInline preload="metadata">
                                    <source src="/case-study/reelnotes/leave_see_comment.mov" type="video/mp4" />
                                </video>
                            </div>


                            <hr className="hr-straight"></hr>

                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Interact with annotations
                                </h2>
                                <p>
                                    Users can view all annotations attached to a movie on the right side of the screen. Clicking on an annotation takes them directly to its corresponding timestamp. Newly added annotations are updated in real-time within this panel.
                                </p>

                                <video className={`${styles.video}`} autoPlay loop muted playsInline preload="metadata">
                                    <source src="/case-study/reelnotes/using_bookmark.mov" type="video/mp4" />
                                </video>
                            </div>

                            <hr className="hr-straight"></hr>

                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Analyze annotation patterns
                                </h2>

                                <p>
                                    Users can access their favorite movies through the library, which includes a graph of annotations from the people they follow. Users can interact with the graph to easily explore the annotations.
                                </p>

                                <video className={`${styles.video}`} autoPlay loop muted playsInline preload="metadata">
                                    <source src="/case-study/reelnotes/library.mov" type="video/mp4" />
                                </video>
                            </div>


                        </div>
                    </div>


                    <hr className="hr-straight"></hr>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Challenge and Solution</h4>
                        </div>
                        <div>
                            <p>We chose a custom video player VJS because the built-in bootstrap player included inaccessible padding, making precise note positioning challenging. Relative coordinates, expressed as percentages of the video’s width and height, ensured notes stayed aligned with the video content across different dimensions and devices. By dynamically recalculating pixel positions during resizing or full-screen transitions, the custom player delivered a responsive and user-friendly experience.</p>

                            <div className={`flex ${styles.challenge}`}>
                                <img src="/case-study/reelnotes/challenge_1.webp" alt="Challenge & Solution" />
                                <img src="/case-study/reelnotes/challenge_2.webp" alt="Challenge & Solution" />
                            </div>

                            <p>It also ensures that notes and timeline bookmarks remain accurately positioned at the same relative coordinates, regardless of screen size or resolution.</p>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Future Direction</h4>
                        </div>
                        <div className={`flex-column ${styles.futureDirection}`}>
                            <h2 className="fw-3">Enhancing flexibility in annotation</h2>
                            <p>
                                To make the core experience even more flexible, we plan to introduce features that give users more control. This includes a <b>toggle option</b> for annotations, allowing users to easily hide or display notes as they wish, minimizing visual clutter when not needed. <br /><br />Additionally, <b>drag-and-drop</b> functionality for annotations will enable users to freely move notes around the screen. This not only makes the annotations themselves more interactive, but also allows users who wrote them to play around together, which makes communication more interesting and unexpected.
                            </p>
                        </div>
                    </div>
                </div>


            </PageWrapper>
        </div>
    );
};

export default ReelnotesPage;
