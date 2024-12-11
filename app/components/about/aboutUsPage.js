import React, { Fragment} from "react";
import PageTitle from "../pagetitle/PageTitle";
import aImg from "@/public/images/about/aboutus.jpg";
import aImg2 from "@/public/images/about/training.jpg";
import PolicySection from "./Policy";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <Fragment>
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"About Us"}
        />
        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-8"> 
                  <div className="image_wrap">
                    <Image src={aImg} alt="DSL - About " />
                  </div>
                </div>
                <div className="col-4">
                  <div className="image_wrap position-relative">
                    <Image src={aImg2} alt="DSL - About" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PolicySection /> 
        {/*  */}
      </main>
      
    </Fragment>
  );
};
export default AboutUsPage;
