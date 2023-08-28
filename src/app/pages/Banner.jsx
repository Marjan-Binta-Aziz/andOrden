"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import heroData from './data/heroData';

export default function App() {
  return (
    <div className=' px-10'>
      <Swiper className="!object-fit rounded-2xl"
        rewind={true}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
          {
            heroData.map(hero=>
        <SwiperSlide>
          <img
              alt="gallery"
              className=" h-96 w-full rounded-lg object-cover object-center"
              src={hero.img}
            />
          </SwiperSlide>
              )
          }
        
      </Swiper>
    </div>
  );
}
