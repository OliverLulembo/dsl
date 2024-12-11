import React, { useState } from 'react'
import icon1 from '@/public/images/icons/icon_bulb.svg'
import icon2 from '@/public/images/icons/icon_user_rating.svg'
import icon3 from '@/public/images/icons/icon_hand_shake.svg'
import eImg from '@/public/images/services/2.jpg'
import Image from 'next/image'


const EmpoweringSuccess = () => {
    return (

        <section className="empowering_success_section section_space bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="heading_block text-center">
                  <h2 className="heading_text mb-0">
                    Empowering Success Through Strategic Consulting Since 2001
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <div className="image_wrap position-relative">
                  <Image className="rounded" src={eImg} alt="Techco - About"/>
                </div>
              </div>
              <div className="col-6">
                <ul className="empowering_services unordered_list_block ps-lg-5">
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <Image src={icon1} alt="Bulb SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">2011 - Inception</h3>
                        <p className="mb-0">
                          The idea of DSL became a reality
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <Image src={icon2} alt="User Rating SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">2012 - Team Growth</h3>
                        <p className="mb-0">
                          The DSL Team grew in both number and expertise
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="iconbox_block layout_icon_left">
                      <div className="iconbox_icon">
                        <Image src={icon3} alt="Hand Shake SVG Icon"/>
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title">2013 - Recognition</h3>
                        <p className="mb-0">
                          Our first local award was won
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
}

export default EmpoweringSuccess;