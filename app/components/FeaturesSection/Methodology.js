import React from 'react';
import sIcon1 from '/public/images/icons/icon_head.svg'
import sIcon2 from '/public/images/icons/icon_check.svg'
import sIcon3 from '/public/images/icons/icon_like.svg'
import sIcon4 from '/public/images/icons/icon_dart_board.svg'
import fimg from '@/public/images/case/cair.png'
import Image from 'next/image';

const FunFact = [
    {
        title: 'Collect',
        subTitle: 'Collect information from business processes, applications, databases, operating systems, networkdevices, and users to understand the business and its associated risks.',
        symbol: '+',
        icon: sIcon1,
    },
    {
        title: 'Analyse',
        subTitle: 'Analyze information and validate that controls and security measures are in place to support businessobjectives.',
        symbol: '+',
        icon: sIcon2,
    },
    {
        title: 'Identify',
        subTitle: 'Identify risks and generate recommendations, action plans, and changes to controls to reduce thelevel of risk.',
        symbol: 'K+',
        icon: sIcon3,
    },
    {
        title: 'Remediate',
        subTitle: 'Remediate issues with management support to ensure the preservation of business value, delivery ofobjectives, and protection of assets.',
        symbol: '%',
        icon: sIcon4,
    },


]


const Methodology = () => {

    return (
        <section className="client_logo_section section_space methodology" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_1.svg'})` }}>
                <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        Our Methodology
                    </h2>
                </div>
                </div>
                <div className='container'>
                    <div className="row align-items-center justify-content-lg-between">
                    <div className="col-4">
                            <div className="our_world_employees">
                                <div className="image_wrap">
                                    <Image src={fimg} alt="Techco - Employees Guoup" />
                                </div>
                                <div className="content_wrap">
                                    <h3 className="title_text mb-0">
                                        Our Methodology
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                        
                        <p className=''>
                        The CAIR® methodology is a proprietary Digital Safe methodology developed to integrate IT and cybersecurity controls in a single framework aimed at covering all risks end-to-end. Ourmethodology drives our approach to information gathering, analysis, threat identification,and remediation of risks across IT infrastructure, business processes, people skills, andapplications such as Active Directory, database management systems, file integrity systems,operating systems, databases, applications, malware protection solutions, hosts, and alldigital technology in support of business objectives.
                        </p>
                            <div className="row mt-30">
                                {FunFact.map((funfact, fitem) => (
                                    <div className="col-6" key={fitem}>
                                        <div className="funfact_block">
                                            <div className="funfact_content">
                                                <div className="">
                                                    <h2>{funfact.title} </h2>
                                                </div>
                                                <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        
                    </div>
                </div>
        </section>
    );
}

export default Methodology;