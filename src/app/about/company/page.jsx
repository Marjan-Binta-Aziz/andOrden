import React from 'react';
import logo from '../../../../public/images/logo/orden-ts.png';
import Image from 'next/image';
import Logo from '@/app/pages/logo';

function Company() {
  return (
    <div className="px-10">
      <div className="">
        <title>Company</title>
        <div></div>
      </div>
      <p className="text-center text-3xl my-3">About Us</p>
      {/* content start */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-items-center items-center">
        <div className="md:col-span-3 sm:col-span-1">
          <p className="text-justify w-full">
            and ORDEN is a design studio of ARCHITECTURE, LANDSCAPE ARCHITECTURE & INTERIOR based in Dhaka, Bangladesh.
            'ORDEN® means Order in Spanish, which etymologically stands for arrangements, disposition. The design
            process involves FORM, SPACE and ORDER. It is intended to design in Order and harmony and bring out the
            essence of particular project in its very own context. Established in 2011, the firm is rigorously on
            variety of projects by growing its expertise on integrity, creativity, environmental sensitivity and
            technical knowledge. We are a broad array of expertise with different background from principal interested
            in integrating architecture with landscape architecture in Bangladesh for the first time.
          </p>
        </div>
        {/* image div */}
        <div className="block pl-8">
        <Image src={logo} alt="logo" srcSet="" />
        </div>
      </div>
      {/* content start end */}
      {/* Area of expertise div start */}
      <div>
        <p className="text-2xl">Area of Expertise</p>
        • Architecture • Landscape planning and design • Interior design •
        Master Planning • Product Design
      </div>
      {/* Area of expertise div end */}
      {/* awards div start */}
      <div>
        <p className="text-2xl">Awards</p>
        <p>
          • SHORTLISTED for Abdullatif AI Fozan Award for Mosque Architecture AL FOZAN Social Foundation Third Cycle
          2017-2019 • PROJECT | Mohor Para Mosque, Shibpur, Narshingdi JANUARY, 2019 • FOREIGN COUNTRIES' ARCHITECTURE
          AWARDS (FCAA) 27th JK AYA ( Architect of the Year Award) . Foreign Countries' Young Architect Award PROJECT |
          Moor Para Mosque, Shibpur, Narshingdi JANUARY, 2018
        </p>
      </div>
    </div>
  );
}

export default Company;
