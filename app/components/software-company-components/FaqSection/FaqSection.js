
import React, { useState } from 'react';
import shape1 from '../../../public/images/shapes/shape_space_4.svg'
import shape2 from '../../../public/images/shapes/shape_angle_3.webp'
import Image from 'next/image';

const faqs = [{
    id: 1,
    question : 'This is the first question',
    answer : 'This is the answer to the first question. We will give it a slightly longer answer so that we can seee how it will behave.',
    open : true,
},{
    id: 2,
    question : 'This is the second question',
    answer : 'This is the answer to the first question',
    open : false,
},{
    id: 3,
    question : 'This is the third question',
    answer : 'This is the answer to the first question',
    open : false,
},{
    id: 4,
    question : 'This is the fourth question, it is a little longer, but the that\'s the idea, we make it longer to see how it looks.',
    answer : 'This is the answer to the fourth question',
    open : false,
},
]


const FaqSection = () => {

    

    return (
        <section className="faq_section section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        <mark>Frequently Asked Questions</mark>
                    </h2>
                </div>
                <div className="faq_accordion accordion" id="faq_accordion">
                        <Accordion data={faqs}/>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <Image src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <Image src={shape2} alt="Techco Shape Angle" />
            </div>
        </section>
    )
};

function Accordion({data}) {

    return (
        <>
            <div className="accordion" id="service_process_faq">
                {data.map((item, i) => (
                    <AccordionItem key={i} id={item.id} title={item.question} text={item.answer} />
                ))}
            </div>
        </>
    );
};

function AccordionItem({id, title, text}) {
    const [open, setOpen] = useState(false);
    function toggleView() {
        setOpen(!open);
    };
    return (
    <div className="accordion-item">
        <div onClick={toggleView}><h2  className="accordion-title">Q{id} {title}</h2></div>
        {open && <div  className='accordion-body'><h4>{text}</h4></div>}
    </div>);
}

export default FaqSection;
