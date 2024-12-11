"use client"

import React from 'react'
import Header from '../components/header/Header';
import PageTitle from '../components/pagetitle/PageTitle'
import Scrollbar from '../components/scrollbar/scrollbar'
import Footer from '../components/footer/Footer';
import ContactSection from '../components/ContactSection/index';

const ContactPage = () => {
    
    
    return (
        <>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Contact Us'} pagesub={''} pageTop={''} />
                <ContactSection />
            </main>
            <Footer />
            <Scrollbar />
        </>
    )
}

export default ContactPage;