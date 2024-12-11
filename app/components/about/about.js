import React, { useState } from 'react'
import Link from 'next/link'
import about1 from '@/public/images/about/home-about-1.jpg'
import Image from 'next/image'


const About = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about_section section_space">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about_image_1">
                            <Image src={about1} alt="DSL - About" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_content">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    
                                </div>
                                <h2 className="heading_text">
                                    Why Us
                                </h2>
                                <p className="heading_description mb-0">
                                Digital Safe Ltd has adopted the 360° approach to Cybersecurity and ICT risk to ensure that an organization gains the required layers of security around Governance, 
                                Technology, People and Processes. These layers of security are achieved through a systematic 
                                understanding of the entity, its operating environment, regulatory requirements, threat landscape and internal attributes to come up with a tailored security 
                                solution that can be matured from one capability level to the next in a consistent and simplified way while addressing the underlying risk factors. 
                                We aim to balance Information Technology usability and security to ensure businesses get maximum value from their digital investments at minimal risk.
                                </p>
                            </div>
                            <ul className="icon_list unordered_list_block mb-5">
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Local.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Diverse.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Customer Focused.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        Risk Focused.
                                    </span>
                                </li>
                                <li>
                                    <span className="icon_list_icon">
                                        <i className="fa-solid fa-circle fa-fw"></i>
                                    </span>
                                    <span className="icon_list_text">
                                        End to End.
                                    </span>
                                </li>
                            </ul>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link onClick={ClickHandler} href="/pricing" className="btn">
                                        <span className="btn_label" data-text="Get Started">Get Started</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <button className="video_btn" onClick={() => setOpen(true)}>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-play"></i>
                                        </span>
                                        <span className="btn_label">How We Works</span>
                                    </button>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;