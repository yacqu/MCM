import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Subscribe from '../subscribe/Subscribe'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join Our Newsletter To Get All New News About MCM Phoenix
            </p>
            <p className='footer-subscription-text'>
                Unsubscribe at anytime
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' 
                    placeholder='Your Email' className='footer-input' />
                    <button onClick={Subscribe} >Subscribe</button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>What We Do</Link>
                    <Link to='/'>Community Members</Link>
                    <Link to='/'>Volunteer</Link>
                    <Link to='/'>Mission Statment</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Message Us</Link>
                    <Link to='/'>Email</Link>
                    <Link to='/'>Phone: (602) 306-4959</Link>
                    <Link to='/'>Instagram</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Donate</h2>
                    <Link to='/sign-up'>Credit Card</Link>
                    <Link to='/'>Zelle</Link>
                    <Link to='/'>Venmo</Link>
                    <Link to='/'>Cash App</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer