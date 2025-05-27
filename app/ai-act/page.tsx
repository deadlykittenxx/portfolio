

'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import shared from '../styles/project.module.css';
import styles from '../styles/aiact.module.css';
import * as Icons from '../components/icons';
import StarDivider from '../components/StarDivider';

import { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

const AIactPage: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector('.beforeAfterContainer') as HTMLElement | null;

        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            container.style.setProperty('--position', `${percentage}%`);
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div>

            <Navigation />

            <div className={`${shared.background} ${styles.background}`}>
            </div>

            <PageWrapper>
                <div className={`${shared.header}`}>
                    <div className="chipsContainer">
                        <h5 className="chips">UI/UX design</h5>
                        <h5 className="chips">Quantitative study</h5>
                        <h5 className="chips">Gamification</h5>
                    </div>

                    <div className={`${shared.title}`}>
                        <h1>AI Act Game</h1>
                        <h4>A user experience study of the AI Act Game to assess its usability, engagement, and educational effectiveness</h4>
                    </div>

                    <div className={`${shared.headerDetail}`}>
                        <div className="box">
                            <h6>Duration</h6>
                            <p>5 months</p>
                        </div>

                        <div className="box">
                            <h6>Role</h6>
                            <p>UI·UX Designer/UX Researcher</p>
                        </div>

                    </div>

                </div>

                <div className={`${shared.container}`}>
                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Background</h4>
                        </div>


                        <div className={`${styles.backgroundContainer}`}>
                            <p>
                                The <a href="https://www.telecom-paris.fr/fr/ideas/ai-act-game" className={`${shared.link}`}>AI-Act Game</a>, designed by Dr. Thomas Le Goff (Télécom Paris), is a web-based interactive game created to teach the public and legal professionals about the AI Act. The Act is a set of rules by the European Commission to ensure safe and responsible use of AI.
                                <br></br><br></br>
                                The game targets both legal experts and general users, who have very different needs. It is difficult to design an experience that works well for both groups without confusing or boring one side.

                            </p>

                            <div className={`flex ${shared.imageContainerDouble}`}>
                                <img src="/case-study/aiact/screen1.webp" alt="Background" />
                                <img src="/case-study/aiact/screen2.webp" alt="Background" />
                            </div>

                            <p>
                                Users interact with various AI-related legal scenarios through a click-based interface. However the initial version relied heavily on dense text with minimal interactive elements.

                            </p>
                            <div className={`${shared.imageContainer}`}>
                                <img src="/case-study/aiact/screen3.webp" alt="Background" />
                                <h5>Users had difficulty processing the large amount of text.</h5>
                            </div>

                            <p>


                                Participants reported difficulty understanding and engaging with the large amount of text. The limited navigation and lack of game mechanics led to confusion and reduced user engagement.
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
                                <h5>Identify</h5>
                                <p>User journey map</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>02</h6>
                                <h5>Design</h5>
                                <p>Prototype</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>03</h6>
                                <h5>Test</h5>
                                <p>A/B Testing<br></br>Analysis</p>
                            </div>

                        </div>
                    </div>



                    <div className={`${shared.section}`}>
                        <div>
                            <h4>User journey map</h4>
                        </div>
                        <div>

                            <p>In the early phase of the project, we created a user journey map to identify core issues. Based on these findings, we were able to determine the direction for improving the game.</p>


                            <div className={`flex ${styles.journeyImg}`}>
                                <img src="/case-study/aiact/journeymap.webp" alt="User Journey Map" />

                            </div>


                            <p>The followings are what we learned: </p>

                            <div className={`flex-column ${styles.journeymapInsight}`}>
                                <h4>Research Insights</h4>
                                <h2 className="fw-3">Users are being confused</h2>


                                <div className={`flex-s ${styles.insightTitle}`}>
                                    <h5>01</h5>
                                    <p>They did not understand the overall game flow.</p>
                                </div>
                                <p className={`${styles.insightDetail}`}>Users were often unsure of where they were within the game and struggled to grasp its overall structure. The absence of clear navigation elements, such as back and next buttons, added to their confusion.</p>

                                <div className={`flex-s ${styles.insightTitle}`}>
                                    <h5>02</h5>
                                    <p>They felt overwhelmed by the large amount of text.</p>
                                </div>
                                <p className={`${styles.insightDetail}`}>The heavy use of text not only disrupted the flow of the game but also negatively affected users’ memory retention after gameplay.</p>

                                <div className={`flex-s ${styles.insightTitle}`}>
                                    <h5>03</h5>
                                    <p>The game lacked meaningful gamification elements.</p>
                                </div>

                                <p className={`${styles.insightDetail}`}>Users could not choose their own character at the beginning, and all interactions were limited to simple clicking. Additionally, the game provided no clear reasoning behind the final outcome, which made the experience feel less like a game and more like an interactive document.</p>

                            </div>
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Prototype</h4>
                        </div>

                        <div className={`flex-column ${styles.design}`}>
                            <p>We identified the unclear game flow as the primary cause of user confusion. Therefore, we began by restructuring the overall framework of the game. A home screen was introduced as a central navigation point, allowing users to return at any time, and the experience was divided into two distinct parts: a tutorial and the main game.</p>

                            <div className={`${styles.designImage}`}>
                                <img src="/case-study/aiact/flow2.webp" alt="Sketch" />
                                <img src="/case-study/aiact/flow1.webp" alt="Sketch" />
                            </div>

                            <p>Next, we focused on creating a visually more appealing UI. This included breaking down large blocks of text across multiple screens to reduce cognitive load. We also added appropriate padding within each screen to improve readability.</p>

                            <div className="beforeAfterContainer">
                                <div className="imageBeforeAfter">
                                    <img
                                        className="image-before slider-image" src="/case-study/aiact/before.webp" alt="Before Image"></img>

                                    <img
                                        className="image-after slider-image" src="/case-study/aiact/after.webp" alt="After Image"></img>

                                </div>

                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="50"
                                    aria-label="Percentage of before photo shown"
                                    className="slider"
                                />
                                <div className="slider-line" aria-hidden="true"></div>
                            </div>

                            <h5>In the original version, concepts such as "low-risk" and "high-risk" systems were explained only through plain text. In the redesign, we introduced a visual spectrum—from green to red—to illustrate the range of risk levels, with corresponding explanations placed along the scale.</h5>
                            <p>Finally, we incorporated more game-like elements. Users could now select their own character in the beginning. We also added interactive behaviors such as hover effects, long presses, and drag-and-drop actions to make the experience feel more engaging than simple clicking.</p>

                            {/* <div className="imageContainer">
                            <img src="/case-study/aiact/screen4.webp"></img>
                            <img src="/case-study/aiact/screen3.webp"></img>
                        </div> */}
                        </div>
                    </div>

                    <div className={`${shared.section}`}>
                        <div><h4>A/B Testing</h4></div>
                        <div>
                            <p>To determine the effectiveness of the AI Act Game, the study employed an A/B testing approach. Mixed quantitative and qualitative methods were used, including quiz results analysis, usability questionnaires, heatmaps, think-out-loud sessions, and semi-structured interviews. The study aimed to identify design errors, user engagement, and the influence of interactive elements on comprehension.</p>

                        </div>
                    </div>
                    <StarDivider />

                    <div className={`${shared.section}`}>
                        <div><h4>Results</h4></div>
                        <div>
                            <div className={`flex-column ${styles.resultContainer}`}>


                                <div className={`${styles.resultElement}`}>
                                    <h2 className="fw-3">Heatmaps</h2>
                                    <p>Before redesigning the presentation, we noticed that some elements looked interactive when they were merely decorative. This observation was confirmed by the study’s heatmaps, on this page for example:</p>

                                    <div className={`${shared.imageContainer}`}>
                                        <img src="/case-study/aiact/heatmap1.webp" alt="Heatmap" />
                                    </div>
                                    <p>
                                        Here, the character is assigned to the users. Clicks on the character icon and title suggest that the users thought they could choose it. There are also clicks on the phone’s stylus that lead nowhere.
                                        <br></br><br></br>
                                        In this case, the heatmaps of the results simply confirm the observations we made while playing the game ourselves. With these observations in mind, we’ve tried to limit the non-interactive decorative elements in the redesigned version. The heatmaps of the redesigned version show good results in this respect.
                                    </p>

                                    <div className={`${shared.imageContainer}`}>
                                        <img src="/case-study/aiact/heatmap2.webp" alt="Heatmap" />
                                    </div>

                                    <p>Overall, in the original version, 25% of clicks are not on an interactive element, when all the clicks are on a widget in the redesigned version. </p>
                                </div>
                                <hr className="hr-straight"></hr>
                                <div className={`${styles.resultElement}`}>
                                    <h2 className="fw-3">User journey</h2>
                                    <p>A major point of confusion for us was on the following page, from the Real time facial recognition use case. At this point we were getting lost and did not know what to do in the game. We thought the issue was that several buttons were leading to the same page. The page in question was very compact in text area and the font was very small, which was adding to our confusion.<br></br><br></br>
                                        Our impressions were confirmed by the heatmaps again, where we see that instead of clicking on the button leading to the rest of the game, users were trying out different ones.</p>
                                    <div className={`flex ${shared.imageContainerDouble}`}>
                                        <img src="/case-study/aiact/heatmap4.webp" alt="Heatmap" />
                                        <img src="/case-study/aiact/heatmap3.webp" alt="Heatmap" />
                                    </div>
                                    <p>A major point of confusion for us was on the following page, from the Real time facial recognition use case. At this point we were getting lost and did not know what to do in the game. We thought the issue was that several buttons were leading to the same page.
                                        <br></br><br></br>
                                        Our impressions were confirmed by the heatmaps again, where we see that instead of clicking on the button leading to the rest of the game, users were trying out different ones.
                                        <br></br><br></br>
                                        We get a much better idea of the flow of the users when we look at the user journeys.
                                    </p>



                                    <div className={`${shared.imageContainer}`}>
                                        <img src="/case-study/aiact/journey1.webp" alt="User journey" />
                                    </div>

                                    <p>
                                        The “right” path to continue the game is the one following the vertical line. Instead, we see many diagonal lines from top right corner to bottom left, representing the going back and forth between the two pages shown earlier.<br></br><br></br>

                                        Spotting areas of confusion for the users was made easier by looking at these journey maps: multiple lines are easily identified and show areas of the game where the user is “stuck”. <br></br><br></br>

                                        So, as we believed before the user tests this point of the game was confusing, we redesigned it so that each point would lead to individual pages. We split the landing pages into several ones: one for each prohibited practice. But it appears that the redesigned version was as confusing for users, as they were still going back and forth, this time between the individual pages…
                                    </p>

                                    <div className={`${shared.imageContainer}`}>
                                        <img src="/case-study/aiact/journey2.webp" alt="User journey" />
                                    </div>

                                    <h4>Dwell time</h4>
                                    <p>As original and redesigned versions were both confusing points, we could compare the time spent on screen to assess which one was the most difficult for users. <br></br><br></br>

                                        This is how we learn that users spent twice as much time on the redesigned page than on the original one: on average, 12 seconds versus 6 seconds. Considering that the page is not an informative one, in the sense that it does not explain any concept from the AI Act, the time here was spent to progress in the flow of the game. The longer dwell time for the redesigned page therefore shows more confusion for the user.</p>
                                </div>

                                <hr className="hr-straight"></hr>
                                <div className={`${styles.resultElement}`}>
                                    <h2 className="fw-3">Thinking aloud & semi-structured interviews</h2>

                                    <p>The thinking aloud allowed us to better understand what was the main issue in this section of the game. Many comments had in common that they showed users lacked clear instructions for continuing the game: they didn’t know what to do, nor did they understand the purpose or consequences of their actions.</p>

                                    <div className={`${styles.testimonial}`}>
                                        <p>“Is there a right answer and wrong ones?”</p>
                                        <p>“Can I choose whatever I want?”</p>
                                    </div>

                                    <p>Or when arriving on the prohibited practice definition page:</p>

                                    <div className={`${styles.testimonial}`}>
                                        <p>“I don’t understand, what is this?”</p>
                                        <p>“Do I need to read everything?”</p>
                                        <p>“What is this document about?”</p>
                                    </div>

                                    <p>
                                        Contrary to what we thought, UI was not the most important. Users especially remember instructions, which are a priority for a good experience. In fact, users who didn’t have this use case gave much more positive feedback on their overall appreciation of the game.
                                        <br></br><br></br>
                                        Players who had no problems understanding the game – because they had a simpler use case – commented more on the aesthetics when we asked them about their immediate impressions after playing both versions. Here is an exerpt of the feedback of a user for CV Screening on original version and Open Source LLM on redesigned version.
                                    </p>
                                    <div className={`${styles.testimonial}`}>
                                        <p>“Original: “High text density led to fatigue.”</p>
                                        <p>Redesigned: “Bright colors and the AI character (“AI Pal”) added a friendly touch.”</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className={`${shared.section} ${styles.conclusion}`}>
                        <div><h4>Conclusion</h4></div>
                        <div>
                            <p>Combining the heatmaps, user journeys, clicking information, dwell-time and qualitative feedback from both versions, we could spot the points of confusion and understand their origin.<br></br><br></br>

                                It was also interesting to do A/B testing, because having similarities and differences in the feedback from two different versions has enabled us to understand the origin of comprehension problems, as in the previous example where the instructions were not highlighted enough.<br></br><br></br><br></br><br></br></p>

                            <h4>Information retention</h4>

                            <h3>Participants had <b>more right answers</b> on the quizz when testing the <b>redesigned version</b>.</h3>
                            <p>After playing each case, we asked participants to answer a short quiz, to check what they remembered from the game. There was one quiz per use case, regardless of the version. The graphs below aggregate the answers from all participants for each use case.</p>
                            <div>
                                <div className={`${styles.graphContainerMain}`}>
                                    <img src="/case-study/aiact/graphs1.png" alt="Image retention graph" />
                                </div>
                                {/* <div className={`flex ${styles.graphContainer}`}>
                                <img src="/case-study/aiact/graphs2.png" alt="Image retention graph" />
                                <img src="/case-study/aiact/graphs3.png" alt="Image retention graph" />


                            </div>

                            <div className={`flex ${styles.graphContainer}`}>
                                <img src="/case-study/aiact/graphs4.png" alt="Image retention graph" />
                                <img src="/case-study/aiact/graphs5.png" alt="Image retention graph" />
                            </div> */}
                            </div>

                            <h4>Limitation</h4>
                            <p>However, we don’t think we can draw conclusions from it because:</p>
                            <ul className={`${styles.limitation}`}>
                                <li><p>Most people were answering out of deduction, or just from one word they remembered reading.</p></li>
                                <li><p>The quizz is biased as some participants were already interested in the use case before playing, when others were just discovering them. People who had some knowledge about their use case remembered better the information.</p></li>
                            </ul>


                            <p>We only have a poll of 20 participants so the bias cannot be ignored.</p>
                        </div>

                    </div>

                    <div className={`${shared.section}`}>
                        <div><h4>Insight</h4></div>
                        <div>

                            <div className={`flex-column ${styles.insight}`}>

                                <div className='flex-column'><div className="flex-as">
                                    <h5 className="chips-black">1</h5> <h2 className="fw-3">Need for gamification</h2>

                                </div>
                                    <p>Initially, our studies and participant feedback revealed a clear need for gamification. Participants consistently highlighted that gamification was more important than UI aesthetics, context, and flow. The current experience lacks essential game mechanics, such as progression, decision making, and engagement features. Without these elements, the experience felt more like an interactive document than a true game, leading to reduced engagement and less effective learning outcomes.</p></div>
                                <div className='flex-column'><div className="flex-as">
                                    <h5 className="chips-black">2</h5> <h2 className="fw-3">Unclear target audience</h2>

                                </div>
                                    <p>Additionally, we identified a significant issue with the unclear target audience. Survey responses from the System Usability Scale showed that 65% of participants needed additional support to navigate the game. The content and complexity did not suit either professionals or general users, legal professionals found it lacking depth, while general users found it overly complex. This highlights the need to clearly define the target audience and tailor the content accordingly.</p></div>

                                <div className='flex-column'><div className="flex-as">
                                    <h5 className="chips-black">3</h5> <h2 className="fw-3">Preference for new version</h2>

                                </div>
                                    <p>From the user experience questionnaire we got results that showed a preference for Version B, with an average score of 3.60 compared to Version A’s 3.14 where the lower scores indicated confusion. Despite this, Version B still faced challenges with usability, content clarity, and engagement, highlighting the need for a more streamlined and user friendly experience.</p></div>
                                <hr className="hr-straight"></hr>
                                <p>Based on our insights, a key recommendation for future work is to transform the experience into a true game by moving from Canva to a more suitable game design platform. Additionally, the content should be restructured to align with a clearly defined target audience for improved clarity. On a positive note, there is no need to redesign the game’s visuals, as our findings showed they had little impact on the user experience despite initial expectations.</p>

                            </div>


                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default AIactPage;