import React, { useEffect } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';
import ContactSectionForm from '../components/ContactSectionForm';
function Contact() {
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
        title="Contact Us"
        backgroundClass="sbg-1"
        breadcrumbs={[
          { name: "Home", link: "/" },
          { name: "Contact Us" }
        ]}
      />
      <ContactSection />
      <ContactSectionForm />
      <Footer />
    </div>
  )
}

export default Contact