import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar2.css";

function Navbar2() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div className="header">
			<h3 className="logo-container">
                <img className="logo-img" src='/images/img-mcm-logo.png' alt="logo"/>
                MCM Phoenix</h3>
			<nav className='navbar' ref={navRef}>
				<a className="navbar-item" href="/home">
                    <img className="item-logo" src="/images/img-home-logo.png" alt="home"/>
                    Home</a>
				<a className="navbar-item" href="/services">
                    {/* Insert images for the links in the navbar here */}
                    Services</a>
				<a className="navbar-item" href="/about">
                    {/* Insert images for the links in the navbar here */}
                    About</a>
				<a className="navbar-item" href="/masjid-construction">
                    {/* Insert images for the links in the navbar here */}
                    Masjid Construction</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
                    Close Menu
				</button>
            <a className='donate-a-tag' href='/donate'>Donate</a>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar2;