import React from 'react';
import { testimonial } from '@/app/api/testimonials'
import Bg from '@/public/images/shapes/bg_pattern_2.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image';

const Testimonial = () => {
    const testimonials = testimonial

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
                            {testimonials.map((testimonial, tsm) => (
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