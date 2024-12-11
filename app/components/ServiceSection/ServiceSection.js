import React from 'react';
import Services from '../../api/service'
import Link from 'next/link'
import Image from 'next/image';

const ServiceSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service_section section_space_1 xb-hidden pb-0">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        Featured Services
                    </h2>
                </div>

                <div className="row">
                    {Services.slice(0, 8).map((service, srv) => (
                        <div className={`${service.col} mt-30`} key={srv}>
                            {service.title ?
                                <div className="service_block">
                                    <div className="service_image">
                                        <Image src={service.sImg} alt="IT Management Services" />
                                    </div>
                                    <div className="service_content">
                                        <h3 className="service_title"><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link>
                                        </h3>

                                    </div>
                                </div>
                                : ''}
                        </div>
                    ))}
                </div>

                <div className="btns_group pb-0">
                    <Link onClick={ClickHandler} className="btn btn-outline-light" href="/service">
                        <span className="btn_label" data-text="More Services">More Services</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;