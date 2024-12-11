"use client"
import Header from "./components/header/Header";
import Hero from './components/hero/hero';
import FeaturePartners from './components/software-company-components/FeaturePartners';
import About from './components/about/about';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
         <main className="page_content">
            <Hero />
            <About />
            <FeaturePartners />
        </main> 
      <Footer/> 
    </div>
  );
}
