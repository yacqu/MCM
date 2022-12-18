import React from 'react'
import './AboutSection.css'

function AboutSection() {
  return (
    <div className='about-page-container'>
        <div className='about-landing-wrapper'>
            <div className='about-landing-container'>
                <h1 className='about-heading-container-title'>ABOUT MCM PHOENIX</h1>
            </div>
        </div>
        <div className='about-content-wrapper'>
            <div className='about-content-container'>
                <h1 className='about-content-title'>What Is MCM Phoenix About?</h1>
                <div className='about-article-wrapper'>
                    <div className='about-article-container'>
                        <article className='about-article'>
                            <div className='article-intro'>
                                <h2 className='article-title'>
                                    MCM Phoenix is about the muslims that make up the community it 
                                    serves. 
                                </h2>
                            </div>
                            <div className='article-misson'>
                                <h3 className='article-mission-title'>
                                    Mission Statement
                                </h3>
                                <div className='mission-text'>
                                    <p1 className='article-misson-p'>
                                        At MCM Phoenix Mosque, our mission is to serve as a spiritual 
                                        and community center for Muslims in the Phoenix area. 
                                        We strive to provide a welcoming and inclusive environment for 
                                        individuals of all ages and backgrounds to learn about, 
                                        practice, and grow in their faith.<br></br>
                                    </p1>
                                    <p2 className='article-misson-p'>
                                        Our goal is to foster a sense of unity and understanding among 
                                        members of the Muslim community, and to promote peace and 
                                        harmony within the wider community. We offer a range of
                                        educational and social programs, as well as spiritual 
                                        guidance and support, to help our members grow in their 
                                        knowledge and practice of Islam.<br></br>
                                    </p2>
                                    <p3 className='article-misson-p'>
                                        We are committed to building strong relationships with people 
                                        of all faiths and backgrounds, and to promoting understanding 
                                        and mutual respect among all members of our community. 
                                        We believe that by working together, we can create a brighter, 
                                        more prosperous future for all.<br></br>
                                    </p3>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <section className='goals-section-padding'>
                    <div className='goals-section-row'>

                    </div>

                </section>

            </div>
        </div>
    </div>
  )
}

export default AboutSection