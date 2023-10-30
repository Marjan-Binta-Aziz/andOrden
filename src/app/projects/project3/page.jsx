import React from 'react';
import eidgah1 from '../../../../public/images/projects/eidgah/eg-1.jpg';
import eidgah2 from '../../../../public/images/projects/eidgah/eg-2.jpg';
import Image from 'next/image';

function Project2() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-2 text-justify">
      <h1 className="text-2xl text-center mb-5">GOPALGANJ SADAR EIDGAH</h1>
      <p>
      The Kendrio Eid Gah (Central Prayer Field) of Gopalganj Sadar is a historically significant place. It is the place the community comes together for various occasions and political assemblies, as well as for the celebration of Eid, twice every year.
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl " src={eidgah1} alt="eidgah" srcset="" />
      </div>
      <p>
        TThe concept behind the Mimbar Mihrab was to represent the prostration from the faith of Islam. The gradual declination of the form is to represent a form in Ruku of the Salat as a submission to Almighty. The flank of the Mimbar Mihrabis to represent the different directions of the faith that congregates in a single point to pray and serve, the Al-mighty. People may converge from various places of life, but they all pray to Allah and then disperse to celebrate Eid.
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl " src={eidgah2} alt="eidgah" srcset="" />
      </div>
      <p>
      The addition of the pockets of Islamic gardens is part of the Eid gah, which will serve as smaller community spaces for the community.
      </p>
      <div className="md:px-32 md:py-10 p-10">
        <Image className="w-full rounded-2xl " src="" alt="eidgah" srcset="" />
      </div>
    </div>
  );
}

export default Project2;