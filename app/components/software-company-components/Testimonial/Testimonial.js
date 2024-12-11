import { useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import icon1 from '../../../public/images/icons/icon_c.svg'
import icon2 from '../../../public/images/icons/icon_g2.svg'
import Image from 'next/image';



// const testimonial = [
//     {
//         id: '01',
//         tImg: tImg1,
//         Title: 'Amazing software services',
//         Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
//         Name: 'Maverick Phoenix',
//         sub: 'Board Member, UNIQA',
//         country: 'Seattle, Ukraine',
//     },
//     {
//         id: '02',
//         tImg: tImg2,
//         Title: 'Amazing software services',
//         Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
//         Name: 'Maverick Phoenix',
//         sub: 'Board Member, UNIQA',
//         country: 'Seattle, Ukraine',
//     },
//     {
//         id: '03',
//         tImg: tImg3,
//         Title: 'Amazing software services',
//         Des: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
//         Name: 'Maverick Phoenix',
//         sub: 'Board Member, UNIQA',
//         country: 'Seattle, Ukraine',
//     },
// ]

const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (

        <div className="row">
            <div className="col-lg-4">
                <div className="deals_winner_customers">
                    <h3 className="title_text">
                        <mark>3,900+</mark> customers win deals with Techco
                    </h3>
                    <div className="row">
                        <div className="col-6">
                            <div className="review_short_info">
                                <div className="icon">
                                    <Image src={icon1} alt="C SVG Icon" />
                                </div>
                                <ul className="rating_block unordered_list">
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                </ul>
                                <div className="review_counter">From <b>200+</b> reviews</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="review_short_info">
                                <div className="icon">
                                    <Image src={icon2} alt="C SVG Icon" />
                                </div>
                                <ul className="rating_block unordered_list">
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li><i className="fa-solid fa-star fa-fw"></i></li>
                                </ul>
                                <div className="review_counter">From <b>300+</b> reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="review_onecol_wrapper">
                    <div className="review_onecol_carousel">
                        


                        <div className="carousel_arrows_nav">
                            <button ref={prevRef} type="button" className="r1cc-swiper-button-prev">
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button ref={nextRef} type="button" className="r1cc-swiper-button-next">
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;