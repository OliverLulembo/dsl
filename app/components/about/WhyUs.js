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
        title: 'Efficiency',
        description: 'Human capability alone is not enough to cope with the ever-increasing volume of cyber threats. We leverage artificialintelligence, continuous security monitoring, continuousvulnerability management, predictive analytics, and threatintelligence to defend organizations against the mostadvanced cyber threats. Digital Safe helps businessesglobally derive the greatest value from investment byfocusing resources, time, and effort on critical risk factors. Astrusted consultants and service providers, we enable a holisticapproach to security that drives efficiency.',
        icon: sIcon2,
    },
    {
        title: 'Consistency',
        description: 'Our portfolio of services and products focuses on maturingbusiness processes, staff capabilities, controls, andorganizational policies. We help organizations of all sizes aligntheir business processes, people skills, and technologycapabilities with their strategy. Our approach and capabilitiesare consistent with internationally recognized standards suchas NIST Standards, the ISO Family of Standards, ITIL, and COBIT2019.',
        icon: sIcon3,
    },
    {
        title: 'Competency',
        description: 'Digital Safe Limited brings a wealth of experience and expertisein cybersecurity risk management across high-profile clientsand multiple industries, running different types of infrastructurein support of business processes. Our wealth of experience isdemonstrated through our proven approach to building resilientbusinesses that can rapidly respond to incidents and safeguardbusiness value. Our engagement team is tailored to everyassignment to ensure all the required competencies and skillsare structured in a manner appropriate to the task. We leverageour defense in in-depth methodology, team composition,knowledge, and experience in implementing all products ordelivering services. Through our partnership with PECB and theInfosec Institute, we provide internationally recognizedcompetency-building and staff security awareness services tobuild stronger human firewalls.',
        icon: sIcon5,
    },
    {
        title: 'Risk Optimization',
        description: 'We develop enterprise immune systems and capabilities thatstrike a balance between risk and reward. Our approach tocomplex security problems empowers our clients to makebetter and more informed decisions to optimize value for thebusiness. Our leadership and technical capabilities in themarket enhance our capability to identify, quantify, andmitigate risk. Our rewards from all risk-taking andoptimization processes are easily measurable against theobjectives that the decision-makers are aiming to achievewithin the business.',
        icon: sIcon1,
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
                                <h2 className="heading_text mb-0">
                                    Why we are the best option
                                </h2>
                                <p>Digital Safe Ltd. has adopted the 360° approach to cybersecurity and ICT risk to ensure that anorganization gains the required layers 
                                    of security around governance, technology, people, andprocesses. These layers of security are achieved through a systematic understanding 
                                    of the entity, itsoperating environment, regulatory requirements, threat landscape, and internal attributes to come upwith a tailored 
                                    security solution that can be matured from one capability level to the next in a consistentand simplified way while addressing the 
                                    underlying risk factors. We aim to balance informationtechnology usability and security to ensure businesses get maximum value from their 
                                    digitalinvestments at minimal risk.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="image_wrap">
                            <Image src={wImg} alt="Techco - About"/>
                        </div>
                    </div>
                    <div className='col-12'>
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
                                        <p className='policyContent'>{policy.description}</p>
                                    </li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;