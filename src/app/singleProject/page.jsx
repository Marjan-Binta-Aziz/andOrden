import React from 'react';
import gallaryData from '../data/gallaryData';

function singleProject() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-44 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {gallaryData.map((gallary) => (
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={gallary.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default singleProject;
