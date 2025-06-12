'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import StarDivider from '../components/StarDivider';
import shared from '../styles/project.module.css';
import styles from '../styles/shaf.module.css';
import * as Icons from '../components/icons';
import PageWrapper from '../components/PageWrapper';
const ShafPage: React.FC = () => {
    return (
        <div>

            <Navigation />

            <div className={`${shared.background} ${styles.background}`}>
            </div>

            <PageWrapper>
                <div className={`${shared.header}`}>
                    <div className="chipsContainer">
                        <h5 className="chips">UI/UX design</h5>
                        <h5 className="chips">Mobile</h5>
                    </div>

                    <div className={`${shared.title}`}>
                        <h1>SHAF</h1>
                        <h4>A sharing economy system that can handle food waste in smart way for single-person households</h4>
                    </div>

                    <div className={`${shared.headerDetail}`}>
                        <div className="box">
                            <h6>Duration</h6>
                            <p>3 months</p>
                        </div>

                        <div className="box">
                            <h6>Role</h6>
                            <p>UI·UX designer/UX researcher</p>
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
                                After graduating and becoming independent, I started living on my own. Unlike living with family, the biggest problem of living alone is the large amount of food waste. Nowadays, as the number of people living alone is increasing, I realized that many people likely share the same concern. Additionally, with growing environmental awareness, efforts to address food waste are becoming more common. I created this application to help solve the problem of food waste in one-person households.
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
                                <p>Desk research<br></br>User interview</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>02</h6>
                                <h5>Identify</h5>
                                <p>Affinity diagram<br></br>Persona<br></br>User journey map</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>


                            <div>
                                <h6>03</h6>
                                <h5>Design</h5>
                                <p>Design direction<br></br>User scenario</p>
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
                            <h4>Desk research</h4>
                        </div>

                        <div className="flex-column">

                            <div className={`flex ${styles.deskResearch}`}>
                                <div className="box flex-column"><Icons.Trash />
                                    <h2>207g</h2>
                                    <p>Single-person household waste</p>
                                </div>
                                <div className="box flex-column"><Icons.Person />
                                    <h2>7502M</h2>
                                    <p>Single-person households</p>
                                </div>
                                <div className="box flex-column"><Icons.Globe />
                                    <h2>74.2%</h2>
                                    <p>Environmental interest</p>
                                </div>

                            </div>


                            <div>
                                <h4>Insight</h4>
                                <p>
                                    As the number of single-person households grows and the proportion of food waste generated by them is the highest among all household types, there is a clear need for services that provide tailored ingredients for this demographic, with environmental concerns driving awareness.
                                </p>
                                <h5><br></br>*All the research was done in South Korea.</h5>
                            </div>

                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>User interview</h4>
                        </div>

                        <div>
                            <p>I conducted interviews with 27 people to obtain qualitative and quantitative results on the difficulties that single-person households experience in their dietary life.</p>

                            <div className={`flex-column ${styles.question}`}>
                                <h3>As a single-person household, have you ever experienced difficulties in dietary life?</h3>
                                <h4>Yes 88%</h4>
                            </div>

                            <div className={`flex ${styles.survey}`}>
                                <div className="flex-column">
                                    <div>
                                        <h5 className="chips-black">Q1</h5>
                                        <p>As a single-person household, what does bother you most in the point of view of dietary life?</p>
                                    </div>
                                    <ul>
                                        <li>There are too much food waste</li>
                                        <li>I can't eat the food that I want to appreciate for financial reasons</li>
                                        <li>Difficult to control the amount of the food when cooking</li>
                                        <li>Spending increased due to delivery food culture</li>
                                        <li>I feel lonely when eating alone</li>
                                    </ul>
                                </div>


                                <div className="flex-column">
                                    <div>
                                        <h5 className="chips-black">Q2</h5>
                                        <p>Why is it difficult for single-person households to reduce food waste?</p>
                                    </div>
                                    <ul>
                                        <li>Food ingredients sold based on consumption of two or more people</li>
                                        <li>There is no one to share</li>
                                        <li>Many foods have a short expiration date</li>
                                        <li>Not enough space at home to store food!</li>
                                    </ul>
                                </div>

                                <div className="flex-column">
                                    <div>
                                        <h5 className="chips-black">Q3</h5>
                                        <p>What concerns you the most when trying food-sharing services for single-person households?
                                        </p>
                                    </div>
                                    <ul>
                                        <li>I'm worried about the freshness</li>
                                        <li>Wouldn't it be difficult to manage food?</li>
                                        <li>Many foods have a short expiration date</li>
                                        <li>I wonder if there will be enough users</li>
                                    </ul>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div className={`${shared.section}`}>

                        <div>
                            <h4>Affinity diagram</h4>
                        </div>

                        <div>
                            <p>Based on the answers from user interviews, we identified common pain points and grouped them into three main categories.</p>

                            <div className={`flex ${styles.affinity}`}>
                                <div ><p>Difficulties in managing food fresh</p></div>
                                <div><p>The need for suitable ingredients</p></div>
                                <div><p>The loneliness of eating alone</p></div>

                            </div>

                            <div className="flex-column">
                                <h4>Goal</h4>
                                <h2 className="fw-3">
                                    Create a food-sharing service based on the concept of a giver and a receiver, enabling users to exchange ingredients with one another in a fresh and safe manner.
                                </h2>
                            </div>
                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Persona</h4>
                        </div>

                        <div>
                            <p>I synthesized the research findings and developed two personas reflecting the insights I gained. This enabled me to more clearly grasp target users and identify the key areas to prioritize in the design process.</p>

                            <div className={`flex-column ${styles.persona}`}>
                                <div className="flex">
                                    <div className={`${styles.personaImg}`}>
                                        <img className={`${styles.personaImage}`} src="/case-study/shaf/persona-female.webp" alt="Persona" />
                                    </div>
                                    <div>
                                        <h4>Joo-hee | 27 years old | Office worker</h4>
                                        <p>Joo-hee, who became a single-person household as she moved away from her hometown after changing her job, started cooking for herself for the first time in her life. However, she was frustrated because there was more food waste than expected and there were no places to store the ingredients.</p>
                                    </div>
                                </div>


                                <div className="flex">
                                    <div className={`${styles.personaImg}`}>
                                        <img className={`${styles.personaImage}`} src="/case-study/shaf/persona-male.webp" alt="Persona" />
                                    </div>
                                    <div>
                                        <h4>Eunwoo | 23 years old | Student</h4>
                                        <p>University student Luke, who became independent while entering university, cooks for the environment even if he wants to order delivery food. However he’s starting to get tired of cooking by himself.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>User journey map</h4>
                        </div>

                        <div>
                            <p>
                                I mapped the user journey to highlight key pain points experienced by each persona at different stages. These pain points were then categorized according to the problem areas identified through the affinity diagram.
                            </p>
                            <div className={`flex ${styles.journeyImg}`}>
                                <img className={`${styles.journeyImage}`} src="/case-study/shaf/journeymap-1.webp" alt="User Journey Map" />
                                <img className={`${styles.journeyImage}`} src="/case-study/shaf/journeymap-2.webp" alt="User Journey Map" />
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Design direction</h4>
                        </div>

                        <div>
                            <p>
                                To address the recurring pain points, I established three design principles and developed functions based on these principles.
                            </p>

                            <div className={`flex-column ${styles.direction}`}>
                                <div className={`flex ${styles.flex}`}>
                                    <div><h4>Pain point</h4></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Lack of space to store food</p>
                                        <p>Lots of foods with a short expiration</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Food ingredients sold based on consumption of two</p>
                                        <p>Absence of necessary food ingredients</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Absence of people to share food with</p>
                                        <p>The loneliness of eating alone</p></div>
                                </div>

                                <hr></hr>

                                <div className={`flex ${styles.flex}`}>
                                    <div><h4>Function</h4></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Register food ingredients information to be shared in the app</p>
                                        <p>Fridge accessible only via registered QR code</p>
                                        <p>Report if there is a problem with food</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Check the location of refrigerators near me</p>
                                        <p>Real-time checking of refrigerator status with the app</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><p>Reward System: Badge #Givers</p>
                                        <p>Sending a thank you message</p></div>
                                </div>

                                <hr></hr>

                                <div className={`flex ${styles.flex}`}>
                                    <div><h4>Value</h4></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><h3>Fresh and safe</h3>
                                        <p>A service that guarantees safety and freshness so that users can use it with trust, since it is a service directly related to dietary life</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><h3>Real time service</h3>
                                        <p>Efficient service that enables real-time check to prevent users from wasting their time</p></div>
                                    <div className={`flex-column ${styles.flexColumn}`}><h3>Spirit of sharing</h3>
                                        <p>A service that does not simply dispose of food waste, but allows neighbors to practice sharing and show affection</p></div>
                                </div>
                            </div>


                        </div>

                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>User Scenario</h4>
                        </div>

                        <div className="flex-column">
                            <p>
                                Based on the design concept, I developed a detailed UX flow to ensure that the user journey aligns seamlessly with the core goals of the service.
                                This process involved mapping out each step of the user interaction, from discovering the service to completing tasks like searching for food or receiving shared items.
                            </p>
                            <div className={`${styles.userScenario}`}>
                                <img className={`${styles.scenarioImage}`} src="/case-study/shaf/shaf-user-scenario.webp" alt="User Scenario" />
                            </div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Wireframe</h4>
                        </div>

                        <div>
                            <p>Before creating the prototype, I designed a wireframe with Figma to lay the foundation for the user interface and functionality of the service.
                                The wireframe served as a blueprint, allowing me to structure the key components of the design, including navigation, layout, and user interactions.</p>

                            <div className={`${styles.wireframe}`}>
                                {/* <img className="wireframeImage" src="/case-study/shaf/wireframe.png" alt="Wireframe" /> */}
                            </div>
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
                                    Find and share food in real-time
                                </h2>
                                <p>To help users access the ingredients they need without hassle, I introduced a real-time map-based search experience.
                                    Instead of browsing through lists, users can now easily locate nearby refrigerators visually and interactively on the map, encouraging spontaneous sharing and retrieval.</p>

                                <div className={`${styles.proto01}`}>
                                    <img className={`${styles.prototypeImage}`} src="/case-study/shaf/screen01.webp" alt="Screen" />

                                </div>

                                <p>
                                    Placing the map on the initial screen that appears as soon as the app is opened enables users to effortlessly achieve their goal.
                                </p>
                            </div>

                            <hr className="hr-straight"></hr>

                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Enhancing freshness and security through a time-limited access flow
                                </h2>

                                <p>During the research, one key insight that emerged was that many users prioritize the freshness of the food above all else. Additionally, trust in the service was identified as a critical factor for users.With this in mind, a three-step process was introduced to ensure food remains fresh and secure throughout the sharing cycle. </p>

                                <div className={`${styles.proto02}`}>
                                    <img className={`${styles.prototypeImage}`} src="/case-study/shaf/screen02.webp" alt="Screen" />

                                </div>

                                <p>First, users register the items they'd like to share. Then, once an item is registered, a freshness timer is automatically activated to maintain the food's quality. Finally, access to the refrigerator is restricted to authorized users through a unique QR code. This flow not only enhances the reliability of the service but also safeguards the quality of the shared food.</p>
                            </div>

                            <hr className="hr-straight"></hr>

                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Encouraging sharing through the reward system
                                </h2>

                                <p>
                                    Many users expressed a sense of loneliness in their eating habits and a lack of people to share food with. To address this, the service incorporates a reward system that encourages small acts of generosity.
                                </p>

                                <div className={`${styles.proto03}`}>
                                    <img className={`${styles.prototypeImage}`} src="/case-study/shaf/screen03.webp" alt="Screen" />

                                </div>

                                <p>When users share food, they receive badges marked with the hashtag #Givers, fostering a light sense of community. Rather than treating food waste as something to discard, this system turns sharing into a meaningful interaction between neighbors.</p>
                            </div>

                            <hr className="hr-straight"></hr>

                            <div className={`${shared.deliverables}`}>
                                <h2 className="fw-3">
                                    Building accountability through communication
                                </h2>

                                <p>To strengthen the sense of community in the sharing process, a feature was introduced allowing users to send thank-you messages after receiving food. Additionally, a reporting system was implemented for users to flag any problematic items.</p>

                                <div className={`${styles.proto04}`}>
                                    <img className={`${styles.prototypeImage}`} src="/case-study/shaf/screen04.webp" alt="Screen" />

                                </div>

                                <p>By enabling open communication, it directly addresses two key pain points: the loneliness users feel when eating alone and the importance of service trust, particularly regarding food freshness.</p>
                            </div>
                        </div>
                    </div>


                    <hr className="hr-straight"></hr>


                    <div className={`${shared.section}`}>
                        <div><h4>Takeaway</h4></div>

                        <div>
                            <div className={`${styles.takeawayImage}`}>
                                <img src="/case-study/shaf/sketch.webp" alt="Sketch" />
                            </div>

                            <p>Working on this project reminded me that design isn’t just about creating screens — it’s about understanding people’s everyday struggles and figuring out how design can gently support them.
                                One of the biggest challenges was narrowing down the scope. There were so many ideas and features I thought would be “nice to have,” but I quickly realized that prioritization is what truly matters. It helped me focus on the main design principles: trust, freshness, and small emotional moments.
                                <br></br><br></br><br></br>
                                At times, I questioned whether simple features like badges or thank-you messages could really make a difference. But the more I thought about the emotional gaps people were expressing, the more I came to believe in the power of small gestures that resonate. It was a meaningful opportunity to see UX not just as functional, but also as relational.
                                <br></br><br></br><br></br>
                                Lastly, since this was a personal project, I wasn’t able to take it as far as validating its business value or measuring its impact on user experience at scale. But if I ever get the opportunity to develop it further to test it with real users, refine it based on feedback, and explore its potential as a viable service, I’d be more than excited to see where it could go.</p></div>
                    </div>
                </div>

            </PageWrapper>
        </div>
    );
};

export default ShafPage;