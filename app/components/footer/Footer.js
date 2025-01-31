import React from 'react'
import Link from 'next/link'
import icon1 from '@/public/images/icons/icon_mail.svg'
import icon2 from '@/public/images/icons/icon_calling.svg'
import icon3 from '@/public/images/icons/icon_map_mark.svg'
//import icon4 from '@/public/images/icons/icon_mail_2.svg'
import Services from '@/app/api/service'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

// const SubmitHandler = (e) => {
//     e.preventDefault()
// }


const Footer = () => {
    return (
        <footer className="site_footer footer_layout_1">
            <div className="content_box" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_3.svg'})` }}>
                <div className="container">
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Write to us</h3>
                                <p className="mb-0">
                                    info@digitalsafezm.com
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title"> Call Us (Zambia)</h3>
                                <p className="mb-0">
                                    +(260) 763 885564 / 763 885563
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <Image src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Our Office</h3>
                                <p className="mb-0">
                                    No.11 Reedbuck Rd., Lusaka, Zambia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="footer_widget pe-md-3">
                                    <h2 className="footer_info_title">Socials</h2>
                                    {/* <p>
                                        Sign up to Techco weekly newsletter to get the latest updates.
                                    </p>
                                    <form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <Image src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form> */}
                                    <ul className="social_links_block unordered_list_block">
                                        <li><Link onClick={ClickHandler} href="/">Facebook</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Twitter</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Linkdin</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Services</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 9).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title ?
                                                    <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                    : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Other Links</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} href="/backoffice">
                                                <span className="icon_list_text">
                                                    Staff Login
                                                </span>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container d-md-flex align-items-md-center justify-content-md-between">
                    <p className="copyright_text m-0">
                        Copyright © 2024 Digitalsafe Limited, All rights reserved. Developed by <Link onClick={ClickHandler} href="https://zoetechzm.com">Zoe Technologies</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;