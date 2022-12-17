import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    });
  
    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='nav-bar'>
            <div className='nav-bar-container'>
                <Link to='./' className='nav-bar-logo' onClick={closeMobileMenu}>
                    MCM Phoenix <i className='logo-img'/>
                </Link>
                <div className='menu-icon' onClick={handleClick} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link 
                        to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/services' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/about' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                        to='/donate' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}
                        >
                            Donate
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn-outline'>Donate</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar;