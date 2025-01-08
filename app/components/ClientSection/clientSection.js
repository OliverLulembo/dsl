import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '@/public/images/clients/cec.gif'
import pimg2 from '@/public/images/clients/kagem.png'
import pimg3 from '@/public/images/clients/fnb.png'
import pimg4 from '@/public/images/clients/access.png'
import pimg5 from '@/public/images/clients/boz.png'
import pimg6 from '@/public/images/clients/stanbic.png'
import pimg7 from '@/public/images/clients/cidrz.png'
import pimg8 from '@/public/images/clients/livestock.png'
import pimg9 from '@/public/images/clients/atlasmara.png'
import pimg10 from '@/public/images/clients/bdo.png'
import pimg11 from '@/public/images/clients/stanbic.png'
import pimg12 from '@/public/images/clients/care.png'
import pimg13 from '@/public/images/clients/ecz.png'
import pimg14 from '@/public/images/clients/efc.png'
import pimg15 from '@/public/images/clients/erb.png'
import pimg16 from '@/public/images/clients/gncz.png'
import pimg17 from '@/public/images/clients/helsb.png'
import pimg18 from '@/public/images/clients/investrust.png'
import pimg19 from '@/public/images/clients/kwacha.png'
import pimg20 from '@/public/images/clients/meharry.png'
import pimg21 from '@/public/images/clients/microfinance.png'
import pimg22 from '@/public/images/clients/mmlp.png'
import pimg23 from '@/public/images/clients/morehouse.png'
import pimg24 from '@/public/images/clients/napsa.png'
import pimg25 from '@/public/images/clients/natsave.png'
import pimg26 from '@/public/images/clients/nrfa.jpg'
import pimg27 from '@/public/images/clients/paygo.png'
import pimg28 from '@/public/images/clients/probase.png'
import pimg29 from '@/public/images/clients/pwc.png'
import pimg30 from '@/public/images/clients/zanaco.png'
import pimg31 from '@/public/images/clients/zechl.png'
import pimg32 from '@/public/images/clients/zema.png'
import pimg33 from '@/public/images/clients/znbs.png'
import pimg34 from '@/public/images/clients/zuct.png'
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
    {
        pImg: pimg10,
    },
    {
        pImg: pimg11,
    },
    {
        pImg: pimg12,
    },
    {
        pImg: pimg13,
    },
    {
        pImg: pimg14,
    },
    {
        pImg: pimg15,
    },
    {
        pImg: pimg16,
    },
    {
        pImg: pimg17,
    },
    {
        pImg: pimg18,
    },
    {
        pImg: pimg19,
    },
    {
        pImg: pimg20,
    },
    {
        pImg: pimg21,
    },
    {
        pImg: pimg22,
    },
    {
        pImg: pimg23,
    },
    {
        pImg: pimg24,
    },
    {
        pImg: pimg25,
    },
    {
        pImg: pimg26,
    },
    {
        pImg: pimg27,
    },
    {
        pImg: pimg28,
    },
    {
        pImg: pimg29,
    },
    {
        pImg: pimg30,
    },
    {
        pImg: pimg31,
    },
    {
        pImg: pimg32,
    },
    {
        pImg: pimg33,
    },
    {
        pImg: pimg34,
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



const ClientSection = () => {

    return (
        <div className="client_logo_carousel">
            <Slider {...settings}>
                {partners.map((partner, pitem) => (
                    <div className="client_logo_item" key={pitem}>
                        <Image src={partner.pImg} alt="DSL - Client Logo" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ClientSection;