'use client';
import React from 'react';
import Image from 'next/image';
import mosque from '../../../../public/images/projects/mohor.jpeg';
import mosque1 from '../../../../public/images/projects/mohor-1.jpeg';
import mosque2 from '../../../../public/images/projects/mohor-2.jpeg';
function Project1({params}) {
  return (
<div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-2 text-justify">
          <h1 className='text-center text-2xl mb-5'>MOHORPARA MOSQUE</h1>
          <p>Bangladesh is a deltaic plain dotted with Mosques from various Architectural Style Period, mostly Pre-Mughal and Mughal. The Mohorpara Mosque is a contemporary endeavor to commemorate those traditional designs in local context.</p>
          <div className='md:px-32 md:py-10 p-10'>
          <Image className='w-full rounded-2xl ' src={mosque} alt="" srcset="" />
          </div>
          <p>The Mohorpara Mosque translates the traditional lofty prayer halls and fore room (iwan) arched facades of the old mosques in Bengals by its contemporary rhetoric. The pointed arch is replaced by half curved lines creating an illusion of arches. The interweaving curves being detached from each other creates a progressive vista of oneness, resembling a pointed arch yet connected only in spatial-temporal and visual field. It represents the abstract connection between believers and the Creator; thus, the detached archways link contemporary architecture, spirituality and symbolism of a traditional Mosque's past with the present. These half arches diffuse the exterior light at day time and create a pleasant ambience. On the contrary the half arches deflect light at night and act as a lantern.</p>
          <div className='md:px-32 md:py-10 p-10'>
          <Image className='w-full rounded-2xl ' src={mosque1} alt="" srcset="" />
          </div>
          <p>The Mosque is conceived as a 'rural lantern' amidst the exuberant greenery illuminating Mohor Para and beyond with its spiritual guidance and omnipresence. The white radiant façade bold yet sublime adjures the worshippers and passersby throughout the day. During Night the transparency of the mosque acts as a lantern against darkness and calls for submission to the Al-mighty. The white mosque became an innate part of landscape as well as the landform, whereas the traditional mosques floating amidst lush green with the glimpse of red bricks or lime plaster.</p>
          <div className='md:px-32 md:py-10 p-10'>
          <Image className='w-full rounded-2xl ' src={mosque2} alt="" srcset="" />
          </div>
      </div>
  );
}

export default Project1;
