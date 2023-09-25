"use client"
import React from 'react'
import {motion} from "framer-motion";
import Link from 'next/link'
import projects from '../pages/projectData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  
  return (
    <motion.div animate={{ y: 15 }}
    transition={{ ease: "easeOut", duration: 3 }} className="flex justify-between  items-center px-10 py-1 w-full gap-4 relative">
      <div className=" w-9/12">
      <Swiper className="w-full h-full rounded-2xl gap-4"
        slidesPerView={1}
        centeredSlides={true}
        zoom={true}
        rewind={true}
        navigation={true}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: 'fraction',
          color: '#000000',
        }}
        modules={[Autoplay, Pagination,Navigation]}>
          {
            projects.map((project) =>
        <SwiperSlide className=""
        >
          <div className='h-96'>
          <img className='h-full w-full !object-cover'
              alt="gallery"
              src={project.img}
            />
          </div>
          </SwiperSlide>
              )
          }
      </Swiper>

      </div>
      <div className="w-full">
        <h1 className="text-copper text-bold text-5xl">
          and ORDEN
        </h1>
          <div>
          <span className="!text-sm !text-end" >
            {' '}
            Collaborative Platform
          </span>
        <p>
          and ORDEN is a design studio of ARCHITECTURE, LANDSCAPE ARCHITECTURE & INTERIOR based company
        </p>
          </div>
        {/* <div className="flex items-center mt-3 gap-3">
          <Link
            href="#"
            className="bg-copper !text-dark p-2 px-4 rounded-lg font-semibold hover:translate-y-1"
          >
            {' '}
            Contact us
          </Link>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Hero