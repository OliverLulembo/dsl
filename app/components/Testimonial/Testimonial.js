import React from 'react';
import tImg1 from '@/public/images/clients/erb.png'
import tImg2 from '@/public/images/clients/nrfa.jpg'
import tImg3 from '@/public/images/clients/wiphan.png'
import tImg4 from '@/public/images/clients/paygo.png'
import tImg5 from '@/public/images/clients/zechl.png'
import Bg from '@/public/images/shapes/bg_pattern_2.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image';



const testimonial = [
    {
        id: '01',
        tImg:tImg1,
        Title:'Risk Management Training',
        Des: "Digital Safe Limited conducted a training on Risk Management for ERB from 27 - 28 December,2022. It was one of the best learning experiences I have had with regard to risk managementtraining. It was a well packaged training course with very practical sessions facilitated by theTrainer. The Trainer was excellent in bringing out his experiences in explaining the key conceptsof risk management. The training sessions were motivational and prompted a lot of ideas fordiscussion and future implementation. I Highly recommend Digital Safe Limited to Institutionsthat require practical training that will motivate transformation.",
        Name: 'Lufunda Muzeya',
        sub:'Manager Risk - Energy Regulation Board (ERB)',
    },
    {
        id: '02',
        tImg:tImg2,
        Title:'Technical Services - BAPT',
        Des: "Digital Safe gave the quality of service we were looking for, we could not ask for more. Theservice was executed with the right tools and the right skills, which was very gratifying, and evenmore so was the fact that the service provider was from the local market. With the kind ofcompetence, commitment, and professionalism which the vendor exhibited during ourengagement, the company is certainly headed for greater heights. I would only urge Digital Safe to remain focused and be a market leader, not only in providingquality service, but also promoting the positive image of our local suppliers.",
        Name: 'Mumba Mubili',
        sub:'Manager ICT - National Road Fund Agency (NRFA)',
    },
    {
        id: '03',
        tImg:tImg3,
        Title:'Advisory Service',
        Des: "Embarking on a journey to implement an ISO 27001 Information Security Management System atWiphan was one of the most challenging yet fulfilling experiences. Digital Safe made ourexperience worthwhile by providing consultancy services that were relevant to successfullycomplete the project.",
        Name: 'Mulenga Bwalya',
        sub:'Information Security and Systems Administrator - Wiphan Care Ministries',
    },
    {
        id: '04',
        tImg:tImg4,
        Title:'Technical Service - Managed Security Service',
        Des: "When it comes to Cyber security there is a big gap in knowledge and expertise within thecountry. Digital PayGo's first encounter of a proposal from digital safe seemed like any other,promises and numbers. We succumbed to a gap analysis, and this was the beginning of trustand belief in the value that they offer. It became true and vivid the state of our organization interms of security. Being a fully owned Zambian organization the conversations andimplementation are smooth because there is an understanding of the country's environmentand the threat landscape. Digital safe is built with experts and equipment best placed to provideexcellent security partner support.",
        Name: 'Jessie Himunyanga',
        sub:'Head, Risk and Compliance - Digital Shared Services Limited',
    },
    {
        id: '05',
        tImg:tImg5,
        Title:'Advisory Services',
        Des: "Digital Safe Limited (DSL) has been and continues to be a trusted partner of choice in thedevelopment and enhanced of Zambia Electronic Clearing House (ZECHL's) information andcyber security capability posture. DSL through its consultancy and solution supply offerings hasbeen critical in the attainment and maintenance of the Payment Card Industry Data SecurityStandard (PCI DSS), ISO 27001 and ISO 22301 state of compliance. We shall continue to trust inDSL's rich staff competence and valuable service offerings.",
        Name: 'Christopher Nanchengwa',
        sub:'Head, Informaiton Security - Zambia Electronic Clearing House Limited (ZECHL)',
    }
]

const Testimonial = () => {

    return (

        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        What clients say
                    </h2>
                </div>

                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}>
                        <Masonry columnsCount={4} gutter="30px">
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block pb-0" key={tsm}>
                                    <h3 className="review_title">“{testimonial.Title}”</h3>
                                    <p className="review_commtent">
                                        {testimonial.Des}
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <Image src={testimonial.tImg} alt={testimonial.Name} />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Name}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;