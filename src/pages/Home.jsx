import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import AboutUsSection1 from '../components/AboutUsSection1';
import Brands from '../components/Brands';
import Testimonial from '../components/Testimonial';
import BlogSection from '../components/BlogSection';
import FooterTop from '../components/FooterTop';  
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  useEffect(() => {
    // document.body.classList.add('dark-theme');
     window.$('.owl-carousel').owlCarousel({ /* options */ });
    return () => {
      // document.body.classList.remove('dark-theme');
    };
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <AboutUsSection1 containerClass="pt-0"/>
      <Brands />
      <Testimonial />     
      <BlogSection />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Home;
