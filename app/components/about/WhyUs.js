import React from 'react';
import wImg from '@/public/images/about/1.jpg'
import sIcon1 from '@/public/images/icons/icon_check_2.svg'
import sIcon2 from '@/public/images/icons/icon_leaf.svg'
import sIcon3 from '@/public/images/icons/icon_box.svg'
import sIcon4 from '@/public/images/icons/icon_receipt_add.svg'
import sIcon5 from '@/public/images/icons/icon_monitor.svg'
import Image from 'next/image';

const Policy = [
    {
        title: 'Local',
        icon: sIcon2,
    },
    {
        title: 'Diverse',
        icon: sIcon3,
    },
    {
        title: 'Customer Focused',
        icon: sIcon4,
    },
    {
        title: 'Risk Focused',
        icon: sIcon1,
    },
    {
        title: 'End to End',
        icon: sIcon5,
    },


]


const WhyUs = () => {

    return (
        <section className="service_section section_space bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    
                    <div className="col-6">
                        <div className="ps-lg-5">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    <span className="badge bg-secondary text-white">Why Us?</span>
                                </div>
                                <h2 className="heading_text mb-0">
                                    Why we are the best option
                                </h2>
                            </div>
                            <ul className="service_facilities_group unordered_list">
                                {Policy.map((policy, pitem) => (
                                    <li key={pitem}>
                                        <strong className="iconbox_block layout_icon_left">
                                            <span className="iconbox_icon">
                                                <Image src={policy.icon} alt="Dollar SVG Icon" />
                                            </span>
                                            <span className="iconbox_content">
                                                <strong className="iconbox_title mb-0">{policy.title}</strong>
                                            </span>
                                        </strong>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="image_wrap">
                            <Image src={wImg} alt="Techco - About"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;