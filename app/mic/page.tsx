'use client';

import React from 'react';
import Navigation from '../components/Navigation-bar';
import shared from '../styles/project.module.css';
import styles from '../styles/aiact.module.css';
import styless from '../styles/shaf.module.css';
import * as Icons from '../components/icons';
import StarDivider from '../components/StarDivider';

import { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

const MICPage: React.FC = () => {
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
                        <h5 className="chips">UX Research</h5>
                        <h5 className="chips">Web Design</h5>
                        <h5 className="chips">A/B Testing</h5>
                        <h5 className="chips">Information Architecture</h5>
                    </div>

                    <div className={`${shared.title}`}>
                        <h1>Microfluidics Innovation Center Website Redesign</h1>
                        <h4>Redesigning the homepage structure to convert visitors into European research consortium partners</h4>
                    </div>

                    <div className={`${shared.headerDetail}`}>
                        <div className="box">
                            <h6>Duration</h6>
                            <p>6 months</p>
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
                            <h4>Process</h4>
                        </div>


                        <div className={`flex ${shared.process}`}>
                            <div>
                                <h6>01</h6>
                                <h5>Research</h5>
                                <p>Data Analysis</p>
                                <p>User Study</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>02</h6>
                                <h5>Ideation</h5>
                                <p>Persona</p>
                                <p>HMW Framework</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>03</h6>
                                <h5>Design</h5>
                                <p>IA Design</p>
                                <p>Design System</p>
                            </div>

                            <div>
                                <Icons.ChevronRight />
                            </div>

                            <div>
                                <h6>04</h6>
                                <h5>Implement</h5>
                                <p>Development</p>
                            </div>
                            <div>
                                <Icons.ChevronRight />
                            </div>
                            <div>
                                <h6>05</h6>
                                <h5>Evaluation</h5>
                                <p>A/B Testing</p>
                                <p>Result Analysis</p>
                            </div>

                        </div>
                    </div>


                    <div className={`${shared.section}`}>
                        <div>
                            <h4>Problem & Goal</h4>
                        </div>


                        <div className={`${styles.backgroundContainer}`}>

                            <p>
                                The <a href="https://microfluidics-innovation-center.com/" className={`${shared.link}`}>Microfluidics Innovation Center (MIC)</a> is a French SME specialized in microfluidics, driving innovative research and industrial applications through collaborative partnerships. MIC actively participates in collaborative European-funded research projects while developing tailor-made microfluidic solutions for specific project needs. In this context, the MIC website serves not only as an information portal but also as a <strong>strategic entry point for attracting potential partners. </strong>
                                <br></br><br></br>

                            </p>


                            <div className={`${shared.imageContainer}`}>
                                <img src="/case-study/mic/figure1.png" alt="Findings" />
                                <h5>Collaboration Page Access Failure</h5>
                            </div>

                            <p>


                                However, an analysis of website usage patterns revealed a disconnection between MIC's objectives and actual user behavior. Google Analytics data for January-April 2025 showed that <strong>none of the 3,250 homepage visitors navigated to the Call for Proposals page,</strong> which is the most visible pathway for partnership on the homepage.<br></br><br></br>
                            </p>


                            <div className={`flex ${shared.imageContainerDouble}`}>
                                <img src="/case-study/mic/figure2.png" alt="Findings" />
                                <img src="/case-study/mic/figure3.png" alt="Findings" />
                            </div>

                            <p>
                                "About Us" (201 visits) and "Team" (160 visits) showed high engagement, indicating genuine user interest. However, only 3 sessions proceeded to collaboration pages, and notably, <strong>zero users reached the "Contact Us" page.</strong>This sharp drop-off proves the website failed to convert user interest into actual partnership inquiries.

                                <br></br><br></br>

                                <strong>Circular navigation loops</strong> emerged as a key factor behind this drop-off.
                                <br></br><br></br> After visiting "About Us," 57 users moved to "Research Projects," but over half returned to "About Us" instead of advancing. Similarly, one-third of "Team" visitors cycled back to "Home." This confirms users were trapped in loops trying to verify credibility, rather than losing interest.
                                <br></br><br></br><br></br><br></br>
                            </p>

                            <div className="flex-column">
                                <h4>Goal</h4>
                                <h2 className="fw-3">
                                    Transform the MIC homepage from a passive information portal into a strategic platform for research collaboration
                                </h2>
                            </div>
                        </div>



                    </div>




                    <div className={`${shared.section}`}>
                        <div>
                            <h4>User Study</h4>
                        </div>

                        <div>
                            <p><strong>Methodology</strong></p>
                            <p><br></br>To understand the root causes of the conversion failure, I conducted think-aloud usability testing with nine European researchers who represent potential collaborators. Through affinity diagramming, three critical flaws in the user experience were identified.

                                <br></br><br></br>

                                The sessions were structured around two key scenarios to mirror the actual user journey:<br></br><br></br>

                                • SCENARIO 1 "Explore the homepage to understand the core message and identity of the company." <br></br>
                                • SCENARIO 2 "Find specific collaboration opportunities relevant to your research field."
                                <br></br><br></br><br></br><br></br><br></br>
                            </p>




                            <p><strong>Data Analysis</strong></p>
                            <div className={`${shared.imageContainerDouble}`}>
                                <img src="/case-study/mic/segmentation.png" alt="Findings" />
                                <img src="/case-study/mic/affinitydiagram.png" alt="Findings" />

                            </div>
                            <p><br></br>All sessions were screen-recorded to capture behavioral data (clicks, scrolling, dwell time). I transcribed the verbal data and generated 136 UX insight cards, which were then grouped thematically through Affinity Diagramming to identify underlying causes of conversion failure.

                                <br></br><br></br><br></br><br></br><br></br>
                            </p>






                            <div>
                                <h4>Key Findings</h4>
                                <p style={{ marginBottom: '20px' }}>
                                    I identified 5 critical usability issues that caused the zero-conversion rate.
                                </p>

                                {/* 카드 그리드 컨테이너 */}
                                <div className={shared.findingsGrid}>

                                    {/* 01. Identity */}
                                    <div className={shared.findingCard}>
                                        <div className={shared.cardTitle}>
                                            <h5>01</h5>
                                            <p>Identity Ambiguity</p>
                                        </div>
                                        <p className={shared.cardQuote}>
                                            “But their exact role? That's fuzzy. Are they a lab? An accelerator? A funding agency?” (P6)
                                        </p>
                                        <p className={shared.insightDetail}>
                                            Participants showed inconsistent interpretations of MIC's role. This uncertainty forced repetitive information-seeking loops as users attempted to construct a coherent understanding.
                                        </p>
                                    </div>

                                    {/* 02. Trust */}
                                    <div className={shared.findingCard}>
                                        <div className={shared.cardTitle}>
                                            <h5>02</h5>
                                            <p>Trust Barriers</p>
                                        </div>
                                        <p className={shared.cardQuote}>
                                            “I'll directly go to see the projects. I need more examples.” (P7)
                                        </p>
                                        <p className={shared.insightDetail}>
                                            This finding confirms the circular navigation patterns. All participants followed a systematic verification process (Identity → Capabilities → Credibility), but the lack of concrete evidence blocked this flow.
                                        </p>
                                    </div>

                                    <div className={shared.findingCard}>
                                        <div className={shared.cardTitle}>
                                            <h5>03</h5>
                                            <p>Strategic Navigation Flow Misalignment</p>
                                        </div>

                                        <p className={shared.insightDetail}>
                                            The homepage structure ignored the users' natural decision-making sequence: Verify Identity → Check Capabilities → Look for Opportunities. Collaboration was proposed prematurely before trust was established.
                                        </p>
                                    </div>

                                    {/* 03. Text Density */}
                                    <div className={shared.findingCard}>
                                        <div className={shared.cardTitle}>
                                            <h5>04</h5>
                                            <p>Text Density & Readability</p>
                                        </div>
                                        <p className={shared.cardQuote}>
                                            “There is quite a lot of text, but I'm not going to read everything.” (P3)
                                        </p>
                                        <p className={shared.insightDetail}>
                                            Text density created significant processing barriers. Users exhibited selective reading behaviors, prioritizing visual elements and headlines while skipping detailed paragraphs.
                                        </p>
                                    </div>

                                    {/* 04. Navigation (내용 수정됨) */}


                                    {/* 05. Target Audience (내용 수정됨) */}
                                    <div className={shared.findingCard}>
                                        <div className={shared.cardTitle}>
                                            <h5>05</h5>
                                            <p>Missing Personalization</p>
                                        </div>
                                        <p className={shared.cardQuote}>
                                            “I like this part because I work with agriculture... I'll click on this part.” (P4)
                                        </p>
                                        <p className={shared.insightDetail}>
                                            Participants systematically filtered information based on their specific research contexts. Generic presentations failed to capture attention, whereas domain-specific content drove immediate engagement.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>




                    </div>

                   {/* === User Persona Table === */}
                   <div className={`${shared.section}`}>
                        <div>
                            <h4>Target Audience</h4>
                        </div>
                        
                        <div className={`flex-column `}>
                            <h2 className="fw-3">Detailed Persona Breakdown</h2>
                            <p>
                                <br></br>Based on the interview data, I categorized the users into three distinct personas to guide the design strategy.
                            </p>

                            <div className={shared.tableContainer}>
                                <table className={shared.personaTable}>
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>
                                                Rosie<br/>
                                                <span style={{color:'#666', fontWeight:'normal'}}>The Skeptical Evaluator</span>
                                            </th>
                                            <th>
                                                Nicolas<br/>
                                                <span style={{color:'#666', fontWeight:'normal'}}>The Opportunity Seeker</span>
                                            </th>
                                            <th>
                                                Sky<br/>
                                                <span style={{color:'#666', fontWeight:'normal'}}>The Domain Specialist</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Characteristics</td>
                                            <td>Experienced researcher, very cautious about new partnership</td>
                                            <td>Early-stage researcher, actively seeking collaboration opportunities</td>
                                            <td>Expert in specific microfluidic applications</td>
                                        </tr>
                                        <tr>
                                            <td>Motivation</td>
                                            <td>Seeks concrete evidence of capability and track record before considering collaboration</td>
                                            <td>Wants to quickly understand available opportunities and application process</td>
                                            <td>Looks for partnerships within their narrow area of expertise</td>
                                        </tr>
                                        <tr>
                                            <td>Behaviors</td>
                                            <td>Extensively reviews team qualifications, past projects, and publication records</td>
                                            <td>Scans for relevant calls, funding opportunities, and partnership formats</td>
                                            <td>Searches for domain-specific projects and technical capabilities</td>
                                        </tr>
                                        {/* Pain Points 행에 강조 스타일 적용 */}
                                        <tr className={shared.painPointsRow}>
                                            <td>Pain Points</td>
                                            <td>Frustrated by generic marketing language, needs specific and verifiable information</td>
                                            <td>Overwhelmed by dense text, needs clear and accessible action pathways</td>
                                            <td>General information is irrelevant, requires targeted content</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <StarDivider />

                </div>
            </PageWrapper>
        </div>
    );
};

export default MICPage;