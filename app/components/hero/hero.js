import React from 'react';
import Link from 'next/link'
import heroImg from '@/public/images/hero/hero_image_2.jpg'
import Image from 'next/image';

const Hero = () => {

    return (
        <section className="it_solution_hero_section">
            <div className="container">
                <div className="row">
                    <div className="col-7 hero-left">
                        <div className="it_solution_hero_content" style={{ backgroundImage: `url(${'/images/shapes/it_solution_hero_bg_1.svg'})` }}>
                            <h1>
                                Your End-to-End Cybersecurity Partner
                            </h1>
                            <p>
                                
                            </p>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link className="btn" href="/pricing">
                                        <span className="btn_label" data-text="Get Started">Request a Consultation</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-5 hero-right">
                        <ul className="it_solution_hero_images unordered_list">
                            <li className='right-hero-image'>
                                <Image src={heroImg} alt="DSL - Image" />
                            </li>
                            <li className="worldwide_clients">
                                <div>
                                    <div className="counter_value">40+</div>
                                    <p>
                                        clients
                                    </p>
                                </div>
                            </li>
                            <li className="categories">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <span>Cybersecurity</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <span>Risk Management</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <span>IT Governance</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <span>Training</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <span>See More</span>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;