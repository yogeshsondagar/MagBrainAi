import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner';
import ProjectSection from '../components/ProjectSection';
import Brands from '../components/Brands';
function Portfolio() {
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
        title="Portfolio"
        backgroundClass="sbg-5"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Portfolio" }
        ]}
      />
      <ProjectSection />
      <Brands />
      <Footer />
    </div>
  )
}

export default Portfolio