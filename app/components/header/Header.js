import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '@/public/images/logo.png'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';

const Header = () => {

    const [mobailActive, setMobailState] = useState(false);

     const ClickHandler = () => {
         window.scrollTo(10, 0);
     }

    const [isSticky, setSticky] = useState(false);

     useEffect(() => {
         const handleScroll = () => {
             if (window.scrollY > 80) {
                 setSticky(true);
             } else {
                 setSticky(false);
             }
         };

         window.addEventListener('scroll', handleScroll);
    // Clean up
         return () => {
             window.removeEventListener('scroll', handleScroll);
         };
     }, []);


    return (

        <header className="site_header site_header_1">
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                
                <div className="container">
                    <div className="top-row">
                        <div className="logo" > 
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" href="/">
                                    <Image src={logo} alt="Site Logo "  />
                                </Link>
                                {/* <div className="badge bg-danger-subtle text-danger">We’re Hiring</div> */}
                            </div>
                        </div>
                        <div className="menu" >
                            <nav className="main_menu ">
                                <div className="main_menu_inner" id="main_menu_dropdown">
                                    <ul className="main_menu_list">
                                        <li>
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="home_submenu" role="button" >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                        <Link onClick={ClickHandler} className="nav-link" href="/about" id="company_submenu" role="button">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/services" role="button" aria-expanded="false">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" role="button" aria-expanded="false">
                                                Training & Events
                                            </Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="get-started">
                            <button className="menu-btn btn-outline-light" onClick={() => setMobailState(!mobailActive)} type="button" aria-label="Toggle navigation">
                                <FontAwesomeIcon icon={faBars} size='1x' />
                            </button>

                    
                        </div>
                    </div>
                </div>
                <div className={`mobail-wrap ${mobailActive ? "in-view" : ""}`}>
                    <div className="mobail-menu">
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div> 
            </div>
         </header>

    )
}

export default Header;