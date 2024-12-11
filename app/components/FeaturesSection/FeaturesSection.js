import React from 'react';
import ClientSection from '../ClientSection/clientSection';

// const FunFact = [
//     {
//         title: '25',
//         subTitle: 'Years of experience',
//         symbol: '+',
//         icon: sIcon1,
//     },
//     {
//         title: '280',
//         subTitle: 'Success Stories',
//         symbol: '+',
//         icon: sIcon2,
//     },
//     {
//         title: '5.6',
//         subTitle: 'Companies Trust Us',
//         symbol: 'K+',
//         icon: sIcon3,
//     },
//     {
//         title: '100',
//         subTitle: 'Results Guaranteed',
//         symbol: '%',
//         icon: sIcon4,
//     },


// ]


const FeaturesSection = () => {

    return (
        <section className="client_logo_section section_space" style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_1.svg'})` }}>
            <div className="container">
                <div className="section_space pt-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            Our Clients
                        </div>
                    </div>
                    <ClientSection />
                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;