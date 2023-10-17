"use client"
import { faArrowLeft, faArrowRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
function Filters() {
  const slides = [
    {
      url: 'https://i.ibb.co/VmQVXBB/11.jpg',
    },
    {
      url: 'https://i.ibb.co/gW1NRpc/imp.jpg',
    },
    {
      url: 'https://i.ibb.co/VmQVXBB/11.jpg',
    },

    {
      url: 'https://i.ibb.co/gW1NRpc/imp.jpg',
    },
    {
      url: 'https://i.ibb.co/khkb1v2/mp.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className='grid grid-cols-4 items-center px-10'>
      <div className='md:col-span-1 sm:col-span-2'>
      <h1 className="text-copper text-bold text-5xl">and ORDEN</h1>
      <span className="!text-sm !text-end"> Collaborative Platform</span>
          <p>and ORDEN is a design studio of ARCHITECTURE, LANDSCAPE ARCHITECTURE & INTERIOR based company</p>
      </div>
    <div className='md:col-span-3 sm:col-span-2 max-w-[1400px] h-[400px] w-full m-8 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} size={30} color='#000'/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FontAwesomeIcon icon={faArrowRight}  onClick={nextSlide} size={30} color='#000' />
      </div>
      <div className='flex justify-center items-center'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='h-full cursor-pointer block'
          >
            <FontAwesomeIcon icon={faCircle}  className='w-3 mr-3' />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Filters