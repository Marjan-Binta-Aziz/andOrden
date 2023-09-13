"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../pages/projectData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper className="w-full h-full rounded-2xl gap-4"
        zoom={true}
        rewind={true}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination,Navigation]}>
          {
            projects.map((project) =>
        <SwiperSlide className="flex justify-center items-center rounded-lg"
        >
          <div className='block overflow-hidden h-96'>
          <img className='relative'
              alt="gallery"
              src={project.img}
            />
          </div>
          </SwiperSlide>
              )
          }
      </Swiper>
      </div>
  );
}
