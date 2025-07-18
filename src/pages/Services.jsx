import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner';
import Features from '../components/Features';
function Services() {
    useEffect(() => {
      document.body.classList.add('dark-theme');
       window.$('.owl-carousel').owlCarousel({ /* options */ });
      return () => {
        document.body.classList.remove('dark-theme');
      };
    }, []);
  return (
    <div>
      <Header />
      <PageBanner
        title="Services"
        backgroundClass="sbg-5"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Services" }
        ]}
      />
      <Features />
      <Footer />
    </div>
  )
}

export default Services