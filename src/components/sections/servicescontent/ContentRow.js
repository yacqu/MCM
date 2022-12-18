import React from 'react'
import './ServiceSection.css'
import { Link } from 'react-router-dom'

function ContentRow() {
  return (
    <div className='content-row'>
        <main className='row-main'>
            <article className='row-main-article'>
                <div className='row-main-top-panel'>
                    {/* This is the title */}
                    <h1>Announcements: Quran Classes Start August January 1st</h1>
                </div>
                <div >
                    {/* This bottom panel of article*/}
                    <h2 className='row-main-bottom-panel' >Services Offered Here At MCM Phoenix:</h2>
                </div>
                <div className='article-content-wrapper'>
                    <div className='article-content-lists'>
                        <ul className='article-content-ul'>
                            <li className='article-content-li' ><a href='#YQP' className='article-content-a'>
                                YOUTH QURAN PROGRAM </a></li>
                            <li className='article-content-li' ><a href='#WCA' className='article-content-a'>
                                WOMEN AND CHILDREN AID</a></li>
                            <li className='article-content-li' ><a href='#ZC' className='article-content-a'>
                                ZAKAT COUNSELING</a></li>
                            <li className='article-content-li' ><a href='#MC' className='article-content-a'>
                                MARRIAGE COUNSELING</a></li>
                            <li className='article-content-li' ><a href='#NMC' className='article-content-a'>
                                NEW MUSLIM COUNSELING</a></li>
                        </ul>
                    </div>
                    <div className='article-content-services '>
                        <h1 id='YQP' className='article-content-services-h1'>
                            YOUTH QURAN PROGRAM
                        </h1>
                        <p1 className='article-content-services-p'>
                        The MCM Youth Quran Program is a local program offered at the MCM Mosque
                        to teach young people about the Quran, the central religious text of Islam. 
                        The program is designed to help participants develop a deeper understanding
                        of their faith and build a sense of community among Muslim youth.
                        </p1>
                        <p2 className='article-content-services-p'>
                        The program includes lessons on the history, interpretation,
                        and application of the Quran, as well as activities to help participants 
                        learn and remember the text. It may be open to all young people or may 
                        be specifically targeted at a certain age group or level of knowledge.
                        </p2>
                        <p3 className='article-content-services-p'>
                        The MCM Youth Quran Program is an excellent opportunity for young Muslims
                        in the community to learn more about their faith and grow in their 
                        understanding of the Quran. It is a great way to prepare young people 
                        to take on leadership roles within the Muslim community and to strengthen 
                        their connection to their faith. The program is held at the MCM Mosque, 
                        and is open to anyone interested in learning more about Islam and the Quran.
                        </p3>
                    </div>
                    <div className='article-content-services '>
                        <h1 id='WCA' className='article-content-services-h1'>
                            WOMEN AND CHILDREN AID
                        </h1>
                        <p1 className='article-content-services-p'>
                        The MCM Women and Children Aid Program is a program offered at the
                        MCM Mosque to provide support and assistance to women and children in need. 
                        The program aims to help individuals and families in the community who may 
                        be facing challenges such as poverty, domestic violence, or other forms of 
                        hardship.
                        </p1>
                        <p2 className='article-content-services-p'>
                        The program offers a range of services and resources to help women and 
                        children, including access to education, healthcare, and social support. 
                        It may also provide financial assistance, legal aid, and other forms of 
                        practical support to help individuals and families overcome challenges and 
                        improve their quality of life.
                        </p2>
                        <p3 className='article-content-services-p'>
                        The MCM Women and Children Aid Program is an important resource for the 
                        community, and it is open to anyone who needs assistance, regardless of 
                        their religion or background. It is a welcoming and supportive environment 
                        that helps to build connections and foster a sense of belonging among women 
                        and children in the community.
                        </p3>
                    </div>
                    <div className='article-content-services '>
                        <h1 id='ZC' className='article-content-services-h1'>
                            ZAKAT COUNSELING
                        </h1>
                        <p1 className='article-content-services-p'>
                        The MCM Zakat Counseling Program is a program offered at the MCM Mosque 
                        to provide guidance and support to individuals and families who are 
                        interested in fulfilling the Islamic obligation of zakat (almsgiving). 
                        Zakat is one of the Five Pillars of Islam, and it requires Muslims to give 
                        a portion of their wealth to those in need.
                        </p1>
                        <p2 className='article-content-services-p'>
                        The MCM Zakat Counseling Program offers a range of services to help 
                        people understand and fulfill their zakat obligations. This may include 
                        educational resources and workshops, as well as one-on-one counseling 
                        with trained advisors. The program may also provide assistance in 
                        identifying and supporting reputable charities and organizations that 
                        are eligible to receive zakat donations.
                        </p2>
                        <p3 className='article-content-services-p'>
                        The MCM Zakat Counseling Program is an important resource for the 
                        community, and it is open to anyone who is interested in learning more 
                        about zakat and how to fulfill this important obligation. The program is 
                        designed to help people understand the principles and practices of zakat, 
                        and to provide the support and guidance they need to fulfill their zakat 
                        obligations in a meaningful and effective way.
                        </p3>
                    </div>
                    <div className='article-content-services '>
                        <h1 id='NMC' className='article-content-services-h1'>
                            NEW MUSLIM COUNSELING
                        </h1>
                        <p1 className='article-content-services-p'>
                        The MCM New Muslim Counseling Program is a program offered at the MCM 
                        Mosque to provide support and guidance to individuals who are new to Islam. 
                        The program is designed to help new Muslims navigate the challenges and 
                        opportunities of their faith journey, and to provide a welcoming and 
                        supportive environment for learning and growth.
                        </p1>
                        <p2 className='article-content-services-p'>
                        The MCM New Muslim Counseling Program offers a range of services and 
                        resources to help new Muslims, including educational materials, workshops, 
                        and one-on-one counseling with trained advisors. The program may also 
                        provide assistance with finding resources and support within the community, 
                        such as Islamic schools, study groups, and social events.
                        </p2>
                        <p3 className='article-content-services-p'>
                        The MCM New Muslim Counseling Program is an important resource for the 
                        community, and it is open to anyone who is interested in learning more 
                        about Islam and how to live according to its principles and practices. 
                        The program is a welcoming and supportive environment that helps to build 
                        connections and foster a sense of belonging among new Muslims in the 
                        community.
                        </p3>
                    </div>
                </div>
            </article>
        </main>
        {/* This separates the main and sidebar on the content-row */}
        <div className='sidebar-wrapper'>
            <div className='sidebar'>
            <h1 className='sidebar-title'>Pages<hr></hr></h1>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <Link style={{textDecoration: 'none'}} to='/about'>ABOUT</Link>
                    </li>
                    <li className='sidebar-list-item'>
                        <Link style={{textDecoration: 'none'}} to='/quran-program'>QURAN PROGRAM</Link>
                    </li>
                    <li className='sidebar-list-item'>
                    <Link style={{textDecoration: 'none'}} to='/community'>COMMUNITY PROGRAMS</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContentRow