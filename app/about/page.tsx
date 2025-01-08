"use client"
import Header from "../components/header/Header";
import EmpoweringSuccess from '../components/business-consulting-components/EmpoweringSuccess/EmpoweringSuccess';
import Features from '../components/FeaturesSection/FeaturesSection';
import AboutUsPage from '../components/about/aboutUsPage';
import TeamSection from '../components/TeamSection/TeamSection';
import WhyUs from '../components/about/WhyUs';
import Footer from '../components/footer/Footer';
import Testimonial from "../components/Testimonial/Testimonial";
import Methodology from '../components/FeaturesSection/Methodology';

export default function Home() {
  return (
    <div>
      <Header/>
         <main className="page_content">
            <AboutUsPage />
            <WhyUs />
            <Methodology />
            <TeamSection />
            <EmpoweringSuccess />
            <Features />
            <Testimonial />
            
            {/*<BlogSection />
            <ContactSection />*/}
        </main> 
      <Footer/> 
      {/* <Scrollbar /> */}
    </div>
  );
}
