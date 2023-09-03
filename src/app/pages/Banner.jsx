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
      <Swiper className="object-fill rounded-2xl"
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
        <SwiperSlide className='w-full'>
          <img
              alt="gallery"
              className="h-96 md:w-full sm:w-fit rounded-lg "
              src={hero.img}
            />
          </SwiperSlide>
              )
          }
      </Swiper>

    </div>
  );
}
