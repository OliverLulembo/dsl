import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '@/public/images/Partners/Darktrace.png'
import pimg2 from '@/public/images/Partners/Soceon.webp'
import pimg3 from '@/public/images/Partners/Socradar.webp'
import pimg4 from '@/public/images/Partners/crowdstrike.webp'
import pimg5 from '@/public/images/Partners/fortinet.png'
import pimg6 from '@/public/images/Partners/htb.png'
import pimg7 from '@/public/images/Partners/knowb4.webp'
import pimg8 from '@/public/images/Partners/pecb.png'
import pimg9 from '@/public/images/Partners/xcitium.webp'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
    {
        pImg: pimg9,
    },
]

var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const FeaturePartners = () => {

    return (
        <div className="feature_partners_section">
            <div className="container position-relative">
                <div className="title_text text-white">
                    Our Featured Partners
                </div>
                <div className="client_logo_carousel">
                    <Slider {...settings}>
                        {partners.map((partner, pitem) => (
                            <div className="client_logo_item" key={pitem}>
                                <Image src={partner.pImg} alt="DSL - Partner Logo" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FeaturePartners;