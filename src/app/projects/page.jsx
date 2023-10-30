'use client';
import React from 'react';
import Image from 'next/image';
import p1 from '../../../public/images/projects/mohor-1.jpeg'
import p2 from '../../../public/images/projects/imp.jpg'
import p3 from '../../../public/images/projects/ig-1.jpg'
import {AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTypo3} from '@fortawesome/free-brands-svg-icons';
import {faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Projects() {
  return (
    <AnimatePresence>
      <div className="container mx-auto md:px-6 px-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        {/* project 1 */}
        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:mb-0">
                  <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <a href="./projects/project1">
                    <Image src={p1}
                        className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]"
                        alt="MohorPara"/>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold uppercase">Mohorpara Mosque</h3>
                  <div>
                  <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />Architecture</div>
                  {/* location & year div */}
                  <div className="flex items-center justify-center text-sm font-medium md:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
                    <p className="text-neutral-400 dark:text-neutral-300">Shibpur, Narshingdi</p>
                  </div>
                  <p className=" text-neutral-400 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
                    <small>
                      Year <u>2012-2014</u> by
                      <a href="#!"> and Orden</a>
                    </small>
                  </p>
                  </div>
                </div>
              </div>

          {/* project 2 */}
        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:order-2 md:mb-0">
                  <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <Link href="./projects/project2">
                      <Image src={p2}
                        className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]"
                        alt="Impetus"/>
                    <img
                        
                      />
                    </Link>
                  </div>
                </div>

                <div className="md:order-1">
                  <h3 className="mb-3 text-2xl font-bold uppercase">Rooftop Cafe at Impetus Center</h3>
                  <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />
                    Interior & Landscape
                  </div>
                  {/* location & year div */}
                  <div className="flex items-center justify-center text-sm font-medium md:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
                    <p className="text-neutral-400 dark:text-neutral-300">Tejgaon, Dhaka</p>
                  </div>
                  <p className=" text-neutral-400 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
                    <small>
                      Year <u>2020</u> by
                      <a href="#!"> and Orden</a>
                    </small>
                  </p>
                </div>
          </div>

          {/* project 3 */}
        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div className="mb-6 md:mb-0">
                  <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
                    <a href="./projects/project3">
                    <Image src={p3}
                        className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]"
                        alt="Impetus"/>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold uppercase">Gopalganj Sadar Eidgah</h3>
                  <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                    <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />Architecture & Landscape</div>
                  {/* location & year div */}
                  <div className="flex items-center justify-center text-sm font-medium md:justify-start">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
                    <p className="text-neutral-400 dark:text-neutral-300">Gopalganj</p>
                  </div>
                  <p className=" text-neutral-400 dark:text-neutral-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
                    <small>
                      Year <u>2019-Present</u> by
                      <a href="#!"> and Orden</a>
                    </small>
                  </p>
                </div>
              </div>
      </div>
    </AnimatePresence>
  );
}

export default Projects;


// daynamic
// 'use client';
// import React from 'react';
// import projects from '../data/projectData';
// import {AnimatePresence} from 'framer-motion';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTypo3} from '@fortawesome/free-brands-svg-icons';
// import {faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons';

// function Projects() {
//   return (
//     <AnimatePresence>
//       <div className="container mx-auto md:px-6 px-20">
//       <h2 class="mb-12 text-center text-3xl font-bold">Projects</h2>
//         {projects.map((project) => {
//           if (project.id % 2 == 0) {
//             console.log(project.id);
//             return (
//               <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
//                 <div className="mb-6 md:order-2 md:mb-0">
//                   <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
//                     <a href="../singleProject">
//                     <img src={project.img} className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]" alt="Louvre" />
//                     </a>
//                   </div>
//                 </div>

//                 <div className="md:order-1">
//                   <h3 className="mb-3 text-2xl font-bold uppercase">{project.name}</h3>
//                   <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
//                     <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />
//                     {project.type}
//                   </div>
//                   {/* location & year div */}
//                   <div className="flex items-center justify-center text-sm font-medium md:justify-start">
//                     <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
//                     <p className="text-neutral-400 dark:text-neutral-300">{project.location}</p>
//                   </div>
//                   <p className=" text-neutral-400 dark:text-neutral-300">
//                     <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
//                     <small>
//                       Year <u>{project.year}</u> by
//                       <a href="#!"> and Orden</a>
//                     </small>
//                   </p>
//                   <p className="text-neutral-500 dark:text-neutral-300">{project.description}</p>
//                 </div>
//               </div>
//             );
//           } else {
//             return (
//               <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
//                 <div className="mb-6 md:mb-0">
//                   <div className="block mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20">
//                     <a href="../singleProject">
//                     <img src={project.img} className="w-full overflow-hidden bg-cover bg-no-repeat transition duration-300 ease-in-out hover:opacity-75 bg-[hsla(0,0%,98.4%,.15)]" alt="Louvre" />
//                     </a>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="mb-4 text-2xl font-bold uppercase">{project.name}</h3>
//                   <div className="flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
//                     <FontAwesomeIcon icon={faTypo3} className="h-4 mr-2" />
//                     {project.type}
//                   </div>
//                   {/* location & year div */}
//                   <div className="flex items-center justify-center text-sm font-medium md:justify-start">
//                     <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-4 " />
//                     <p className="text-neutral-400 dark:text-neutral-300">{project.location}</p>
//                   </div>
//                   <p className=" text-neutral-400 dark:text-neutral-300">
//                     <FontAwesomeIcon icon={faCalendarDays} className="mr-2 h-4 inline-flex" />
//                     <small>
//                       Year <u>{project.year}</u> by
//                       <a href="#!"> and Orden</a>
//                     </small>
//                   </p>
//                   <p className="text-neutral-500 dark:text-neutral-300">{project.description}</p>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </AnimatePresence>
//   );
// }

// export default Projects;