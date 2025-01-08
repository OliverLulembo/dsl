import React from 'react'
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
                                <p className="">
                                Digital Safe Limited is a trusted firm that specializes in providing advisory services for Digital
                                transformation, end-to-end Information Security, cybersecurity, and risk management
                                solutions tailored to meet the needs of our customers. We offer comprehensive IT
                                Governance, Cybersecurity, Risk Management, and training programs that are designed to
                                help our customers optimize their resources, protect their information, manage their digital
                                reputation, comply with regulatory requirements, mitigate risks and consistently deliver
                                business value to their stakeholders. </p>
                                <br />
                                <p className="">
                                Our company is proudly Zambian-owned and recognized internationally for our
                                approaches, skilled staff, and advanced technologies that are helping companies across
                                various sectors worldwide preserve their business value, improve customer experience, and
                                comply with regulatory requirements. At Digital Safe, we adopt a multi-phase approach
                                that combines technology, staff training, policies, and secure business processes to
                                manage risks at the source.
                                </p>
                            </div>
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