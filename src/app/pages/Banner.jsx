"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import mohor1 from '../../../public/images/banner/mohor1.jpeg'
import mohor2 from '../../../public/images/banner/mohor2.jpeg'
import mohor3 from '../../../public/images/banner/mohor3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <div className='h-a w-full p-10'>
      <Swiper
        rewind={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide><Image src={mohor1}></Image></SwiperSlide>
        <SwiperSlide><Image src={mohor2}></Image></SwiperSlide>
        <SwiperSlide><Image src={mohor3}></Image></SwiperSlide>
      </Swiper>
    </div>
  );
}
