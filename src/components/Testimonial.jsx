import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import testimonialData from './utils/testimonialData';

import 'swiper/css';
import 'swiper/css/pagination';


function TestimonialSection() {
  return (
    <div className="testimonial-section-2 pt-100 pb-70">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="testimonial-content-2"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-item-2" data-aos="fade-up">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="content">
                      <p>{item.message}</p>
                      <div className="info">
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="image">
                      <div className="quate-icon">
                        <i className="bx bxs-quote-left"></i>
                      </div>
                      <img src={item.image} alt={`${item.name} testimonial`} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialSection;
