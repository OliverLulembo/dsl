"use client"
import React, { Fragment } from 'react';
import Link from 'next/link'
import Header from '../components/header/Header';
import PageTitle from '../components/pagetitle/PageTitle'
import Scrollbar from '../components/scrollbar/scrollbar'
import Footer from '../components/footer/Footer';
import srImg from '@/public/images/services/1.jpg' 
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Testimonial from '../components/Testimonial/Testimonial';
import Image from 'next/image';
import FaqSection from '../components/software-company-components/FaqSection/FaqSection';
import ContactSection from '../components/software-company-components/ContactSection';


const ServicePage = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Services'} pagesub={''} pageTop={''} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            
                            <div className="col-6">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            A Digital Safe Today
                                        </div>
                                        <h2 className="heading_text">
                                            Tailored IT Solutions for Your Success
                                        </h2>
                                        <p className="heading_description mb-0">
                                            we understand that every business is unique, with its own set of challenges, goals, and aspirations. Thats why we offer tailored IT solutions designed.
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} href={'/contact'} className="btn">
                                        <span className="btn_label" data-text="Talk to an Expart">Talk to an Expart</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="team_cartoon_image">
                                    <Image src={srImg} alt="Service Cartoon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSection />
                <div className="pt-130"></div>
            </main>
            <Testimonial />
            {/* <FaqSection /> */}
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
