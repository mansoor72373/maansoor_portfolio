import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';

const Projects = () => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center">Projects</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        {/* Project Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs md:max-w-md lg:max-w-lg mx-auto transform hover:scale-105">
          <h3 className="text-lg md:text-xl font-semibold mt-2 md:mt-4 text-gray-800 text-center">Gadget Galaxy</h3>
          <p className="text-sm md:text-base text-gray-600 mt-2 mb-4 text-center">
            Gadget Galaxy is an e-commerce platform dedicated to selling mobile phones. The website is designed to offer a seamless shopping experience with detailed product listings and user-friendly navigation.
          </p>
          
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Gadget Galaxy Screenshot 1" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Gadget Galaxy Screenshot 2" className="w-full rounded-md swiper-slide-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
