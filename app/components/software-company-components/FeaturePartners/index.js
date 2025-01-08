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
import pimg10 from '@/public/images/Partners/alienvault.png'
import pimg11 from '@/public/images/Partners/barracuda.png'
import pimg12 from '@/public/images/Partners/checkpoint.png'
import pimg13 from '@/public/images/Partners/commvault.png'
import pimg14 from '@/public/images/Partners/delinea.png'
import pimg15 from '@/public/images/Partners/eset.png'
import pimg16 from '@/public/images/Partners/extrahop.png'
import pimg17 from '@/public/images/Partners/fraudwatch.png'
import pimg18 from '@/public/images/Partners/htb.png'
import pimg19 from '@/public/images/Partners/ibm.png'
import pimg20 from '@/public/images/Partners/imperva.png'
import pimg21 from '@/public/images/Partners/infosec.png'
import pimg22 from '@/public/images/Partners/kaspersky.png'
import pimg23 from '@/public/images/Partners/manageengine.png'
import pimg24 from '@/public/images/Partners/microsoft.png'
import pimg25 from '@/public/images/Partners/netskope.png'
import pimg26 from '@/public/images/Partners/nozomi.png'
import pimg27 from '@/public/images/Partners/paloalto.png'
import pimg28 from '@/public/images/Partners/pentera.png'
import pimg29 from '@/public/images/Partners/plextrac.png'
import pimg30 from '@/public/images/Partners/portnox.png'
import pimg31 from '@/public/images/Partners/quest.png'
import pimg32 from '@/public/images/Partners/veeam.png'
import pimg33 from '@/public/images/Partners/tufin.png'
import pimg34 from '@/public/images/Partners/trend.png'
import pimg35 from '@/public/images/Partners/tenable.png'
import pimg36 from '@/public/images/Partners/solarwinds.png'
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
    },{
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
    },{
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
    },{
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
    {
        pImg: pimg35,
    },
    {
        pImg: pimg36,
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