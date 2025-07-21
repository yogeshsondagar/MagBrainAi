import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUsSection1 from '../components/AboutUsSection1'
import PageBanner from '../components/PageBanner';
import Brands from '../components/Brands';
import WorkingProcess from '../components/WorkingProcess';
import Testimonial from '../components/Testimonial';
function About() {
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
    <PageBanner
        title="About Us"
        backgroundClass="sbg-5"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "About us" }
        ]}
      />
      <AboutUsSection1 containerClass="pt-100 ptb-50"  buttonText="Learn More"/>
      <Brands />
      <WorkingProcess />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default About