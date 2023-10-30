import React from 'react';
import impetus1 from '../../../../public/images/projects/impetus/imp-1.jpg';
import impetus2 from '../../../../public/images/projects/impetus/imp-2.jpg';
import impetus3 from '../../../../public/images/projects/impetus/imp-3.jpg';
import impetus4 from '../../../../public/images/projects/impetus/imp-4.jpg';
import impetus5 from '../../../../public/images/projects/impetus/imp-5.jpg';
import Image from 'next/image';

function Project2() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-2 text-justify">
      <h1 className="text-2xl text-center mb-5">Rooftop Cafe at Impetus Center</h1>
      <p>
        Taking inspiration from the previous Industrial neighborhood and the footprint of the previous car garage, the
        restaurant has been designed as a contemporary industrial-themed hangout space with lush greenery on the rooftop
        of the Impetus Center Landmark.
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl " src={impetus1} alt="" srcset="" />
      </div>
      <h2 className='font-bold'>The Poolside Restaurant and Rooftop Landscape:</h2>
      <p>
        The gray is the monolithic tone of the building. The tinge of yellow on the roof has brought pla fulness to the
        restaurant. The native plants with different color and texture of leaves are the serene backdrops. The space has
        a hideout and openness. The restaurant welcomes with the lavish lounge guiding through the slanted corridor and
        opens into a terrace, where a dramatic staircase leads to the rooftop. The journey creates an anticipation of
        enjoyment. Impetus Lounge offers both indoor air-conditioned sitting areas along with a pool side sitting zone.
        A dedicated hideout behind the bamboo grove has been placed to observe the skyline of the Tejgaon Link Road.
      </p>
      <div className="md:px-32 md:py-10 p-10 w-full">
        <Image className="w-full rounded-2xl mb-5 " src={impetus2} alt="" srcset="" />
        <Image className="w-full rounded-2xl " src={impetus3} alt="" srcset="" />
      </div>
      <p>
        The night life is as enchanting as the diurnal active spree. The amber ambience accentuates the yellow ceiling
        with a cozy atmosphere. The ceiling lines continue into the pavement patterns only visible to the observers who
        are sitting and enjoying their food on the mezzanine floor of the restaurant. Meticulous details from the clay
        pottery, the 3d frames on the walls. gravels connected the whole space in a single thread.
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl " src={impetus4} alt="" srcset="" />
      </div>
      <p>
        The brief spaces with a touch of different textures of green gives the diners a moving experience. Sitting
        underneath the Hijol trees, the Elephant ear plants behind the infinity line of the pool are the reminiscence of
        the lucid landscape of Bangladesh. These plants have been selected care lully along with Nayantara.
        Modhumonjori. Aporajita. Nil Parul, Lemon grass. ferns and birds of paradise
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl mb-5" src={impetus5} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Project2;
