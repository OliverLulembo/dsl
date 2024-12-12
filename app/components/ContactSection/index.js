import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '@/public/images/icons/icon_map_mark_2.svg'
import icon2 from '@/public/images/icons/icon_calling_2.svg'
import icon3 from '@/public/images/icons/icon_mail_3.svg'
import icon4 from '@/public/images/icons/icon_calendar_2.svg'
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box">
                    <div className='row'>
                    <div className="col-3">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Location</h3>
                                <p className="mb-0">
                                    Digital Safe Limited
                                    No.11
                                    Reedbuck Road
                                    Kabulonga,
                                    Lusaka, Zambia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contact</h3>
                                <p className="mb-0">+260 763 885564 / </p>
                                <div className="mb-0">+260 763 885563</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">info@digitalsafezm.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Visit Between</h3>
                                <p className="mb-0">Mon - Fri: 8.00-5.00</p>
                                <p className="mb-0">Sat: 8.00-12.00</p>
                                <p className="mb-0">Sunday &amp; Public Holidays: Closed</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="top-row justify-content-lg-between">
                        <div className='row'>
                        <div className="col-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="gmap_canvas ps-lg-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.279707910131!2d28.34861447488982!3d-15.415447585173304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408dc0d00ef89f%3A0x5e672c902b9cc2ef!2sDigital%20Safe%20Limited!5e0!3m2!1sen!2szm!4v1733746282617!5m2!1sen!2szm" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                                {/* <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.279707910131!2d28.34861447488982!3d-15.415447585173304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408dc0d00ef89f%3A0x5e672c902b9cc2ef!2sDigital%20Safe%20Limited!5e0!3m2!1sen!2szm!4v1733746282617!5m2!1sen!2szm"></iframe> */}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;