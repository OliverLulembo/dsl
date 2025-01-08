import React, { useEffect, useState } from 'react';
import Teams from '../../api/team'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const TeamSection = () => {

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    if (!hydrated) {
        return null;
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const displayedTeams = Teams && Teams.length > 0 ? Teams.slice(0, 5) : [];

    return (

        <section className="team_section xb-hidden section_space_1">
            <div className="container">
                <div className="heading_block text-center">
                    <h2 className="heading_text mb-0">
                        Top Skilled Experts
                    </h2>
                </div>

                <div className="team_carousel">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        allowTouchMove={true}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        speed={800}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            1025: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {displayedTeams.map((team) => (
                            <SwiperSlide key={team.Id}>
                                <div className="team_block">
                                    <div className="team_member_image">
                                    <h3 className="team_member_name">
                                            {team.title}
                                        </h3>
                                        {/* <Link onClick={ClickHandler} className="image_wrap" aria-label="Team Details Button" href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                            <Image src={team.tImg} alt="" />
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link> */}
                                        <p>
                                           {team.description} 
                                        </p>
                                    </div>
                                    <div className="team_member_info">
                                      
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="container">
                    <div className="btns_group pb-0">
                        <Link className="btn btn-outline-light" href="/team">
                            <span className="btn_label" data-text="Our All Experts">Our All Experts</span>
                            <span className="btn_icon">
                                <i className="fa-solid fa-arrow-up-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;