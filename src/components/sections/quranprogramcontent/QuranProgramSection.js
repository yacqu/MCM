import React from 'react'
import './QuranProgram.css'

function QuranProgramSection() {
  return (
    <>
        <div className='quran-page'>    {/* flex */}
            <div className='quran-top-content-wrapper'> {/* flex */}
                <img className='quran-top-content-img'
                 src='/images/img-quran-program.jpg'/>
                <h1 className='quran-top-content-img-h1'>
                    MCM Quran Program
                </h1>
            </div>

            <div className='quran-page-content-wrapper'>
                <div className='quran-page-breadrumbs'>
                    {/* put breadcrumbs here */}
                </div>
                <div className='quran-page-content-first-container'> {/* flex */}
                    <div className='quran-content-heading'>
                        <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                        <h2 className='quran-content-heading-h2'>
                            About Our Youth Quran Program
                        </h2>
                        <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                    </div>

                    <div className='quran-content-about'>
                        <p className='quran-content-about-p'>
                            The Quran program at MCM Phoenix Mosque is designed specifically 
                            for young people, with a focus on helping them understand the 
                            teachings of Islam and how to apply them in their daily lives. 
                            The program is structured to provide a comprehensive and holistic 
                            Islamic education, covering a wide range of topics from the Quranic 
                            sciences to the practical aspects of living a righteous and meaningful 
                            life.
                        </p>
                        <p className='quran-content-about-p'>
                            Through interactive lessons and discussions, participants will learn 
                            about the history, language, and meanings of the Quran, as well as its 
                            role in shaping the beliefs and values of Muslims. They will also have 
                            the opportunity to engage in group activities and discussions, allowing 
                            them to gain insights and perspectives from their peers and develop 
                            their own understanding of Islam.
                        </p>
                        <p className='quran-content-about-p'>
                            In addition to providing a strong foundation in the Quranic sciences, 
                            the program also emphasizes the importance of living a complete and 
                            balanced Islamic life, incorporating aspects such as prayer, charity, 
                            and personal conduct. By the end of the program, participants will have 
                            gained a deeper understanding of the Quran and its teachings, and will 
                            be equipped with the knowledge and skills to apply these teachings in 
                            their own lives and become positive, productive members of the Muslim 
                            community.
                        </p>
                    </div>
                    {/* second part */}

                    <div className='quran-content-about-infographic'>   {/* flex */}
                        <img className='quran-content-about-infographic-img'
                        src='/images/img-infographic-1.png' alt='infographic' />
                    </div>
                    <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>

                    <div className='quran-content-heading'>
                        <h2 className='quran-content-heading-h2'>
                            New Muslim Quran Program
                        </h2>
                        <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                    </div>

                    <div className='quran-content-about'>
                        <p className='quran-content-about-p'>
                            The Quran program at MCM Phoenix Mosque is designed specifically for 
                            new Muslims, with a focus on helping them integrate into the Muslim 
                            community and learn about the teachings of Islam in a supportive and 
                            welcoming environment. The program is structured to provide a 
                            step-by-step introduction to the principles and practices of Islam, 
                            with a focus on kindness, compassion, and understanding.
                        </p>
                        <p className='quran-content-about-p'>
                            Through interactive lessons and group discussions, participants 
                            will explore the history, language, and meanings of the Quran, 
                            as well as the fundamentals of Islamic beliefs and practices. 
                            Alongside this, the program also focuses on helping participants 
                            build connections with the local Muslim community through activities 
                            such as group prayers and social events.
                        </p>
                        <p className='quran-content-about-p'>
                            By participating in this program, new Muslims will have the 
                            opportunity to deepen their understanding of the Quran and its 
                            teachings, as well as gain a sense of belonging and connection 
                            within the community. Upon completing the program, participants 
                            will be equipped with the knowledge and skills to continue their 
                            journey as Muslims with confidence and purpose.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default QuranProgramSection